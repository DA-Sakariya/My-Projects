export const Contact = () => {

    const handleSubmit = (form)=>{
        console.log(form.entries())
        const formInputData = Object.fromEntries(form.entries())
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container ">

                <form action={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Name"
                        name="username"
                        required
                        autoComplete="false"
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        name="email"
                        required
                        autoComplete="false"
                    />
                    <textarea
                        name="message"
                        rows="10"
                        placeholder="Enter Your Message"
                        required
                        autoComplete="false"
                    ></textarea>
                    <button type="submit" value="send">Send</button>
                </form>
            </div>

        </section>
    )
}