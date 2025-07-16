const express = require('express')
require('./DB/config')
const cors = require('cors')
const User = require("./DB/Users")
const Product = require('./DB/product')

const Jwt = require('jsonwebtoken')
const jwtkey = "e-comm"

const app = express()

app.use(cors())

app.use(express.json())

app.post('/register', async (req, resp) => {
    let users = new User(req.body)
    let result = await users.save();
    result = result.toObject();
    delete result.password
    delete result.confirmPassword
    Jwt.sign({ result }, jwtkey, { expiresIn: "1m" }, (err, token) => {
        if (err) {
            resp.send({ result: "Somthing Went wrong, please try after sometime" })
        } else {
            resp.send({ result, auth: token });
        }
    })
})

app.post('/login', async (req, resp) => {
    // console.log(req.body)
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password -confirmPassword");
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "Somthing Went wrong, please try after sometime" })
                } else {
                    resp.send({ user, auth: token });
                }
            })
        } else {
            resp.send({ result: "No User Available" })
        }
    } else {
        resp.send({ result: "No User Found" })
    }

})

app.post('/add-product', verifyToken, async (req, resp) => {
    let product = new Product(req.body)
    let result = await product.save()
    resp.send(result)
})

app.get("/products", verifyToken, async (req, resp) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "No Products Found" })
    }
})

app.delete('/product/:id', verifyToken, async (req, resp) => {
    const result = await Product.deleteOne({ _id: req.params.id })
    resp.send(result)
})

app.get('/product/:id', verifyToken, async (req, resp) => {
    let result = await Product.findOne({ _id: req.params.id })
    if (result) {
        resp.send(result)
    } else {
        resp.send({ result: "No Record Found" })
    }
})

app.put('/product/:id', verifyToken, async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    resp.send(result)
    // console.log(result)
})

app.get('/search/:key', verifyToken, async (req, resp) => {
    let result = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            { company: { $regex: req.params.key } }
        ]
    });
    resp.send(result)
})

function verifyToken(req, resp, next) {
    let token = req.headers['authorization']

    if (token && token.startsWith("bearer ")) {
        token = token.split(' ')[1]
        
        // console.log(token)
        Jwt.verify(token, jwtkey, (err, valid) => {
            if (err) {
                resp.status(401).send({ result: "Please Enter Valid Token" });
            } else {
                req.user = valid
                next()
            }
        })
    } else {
        resp.status(403).send({ result: "Please Enter Token" })
    }
}

app.listen(5000)