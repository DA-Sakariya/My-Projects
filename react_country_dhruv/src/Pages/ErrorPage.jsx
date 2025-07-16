import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <h1>Oops! An error Occurred.</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"> 
                <button ><FaLongArrowAltLeft/>Go Home</button>
            </NavLink>
        </div>
    )

}
export default ErrorPage;