import { NavLink, Route, useNavigate } from "react-router-dom";
import "../App.css"
import { useEffect } from "react";
// import { LogOut } from "../Pages/LogOut";
import DarkModeToggle from "./darkMode";

const Headers = () => {

  const auth = localStorage.getItem('user')
  const user = auth ? JSON.parse(auth) : null;
  const username = user?.name || "User";
  const navigate = useNavigate()

  useEffect(() => {
    const path = window.location.pathname;

    if (!auth && path === "/") {
      navigate("/signup");
    }
  }, [auth, navigate]);


  const handleLogout = () => {
    localStorage.clear()
    navigate("/signup")
  }

  return (
    <div className="header">
      <div className="logo">
        <h1>E-Dashboard</h1>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          {
            auth ?(
              <>
                <li>
                  <NavLink to="/" activeclassname="active">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/add" activeclassname="active">Add Products</NavLink>
                </li>
                <li>
                  <NavLink to="/update" activeclassname="active">Update Products</NavLink>
                </li>
                <li>
                  <NavLink to="/profile" activeclassname="active">Profile</NavLink>
                </li>
                <li>
                  {/* <NavLink to="/logout" onClick={<LogOut />} activeclassname="active">LogOut</NavLink> */}
                  <button className="logout-button" onClick={handleLogout}>LogOut {`(${username})`} </button>

                </li>
              </>) :(
              <>
                <li>
                  <NavLink to="/signup" activeclassname="active">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/login" activeclassname="active">Log In</NavLink>
                </li>
              </>
          )}
          {/* <li>
            <DarkModeToggle />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Headers;
