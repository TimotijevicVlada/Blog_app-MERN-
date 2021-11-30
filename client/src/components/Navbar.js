import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {

  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
  }

  return (
    <div className="navbar">
      <div className="nav_social">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-pinterest-square"></i>
      </div>
      <div className="nav_center">
        <span>
          <Link className="link" to="/">
            HOME
          </Link>
        </span>
        <span>
          <Link className="link" to="/about">
            ABOUT
          </Link>
        </span>
        <span>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </span>
        <span>
          <Link className="link" to="/write">
            WRITE
          </Link>
        </span>
        {user ? <span onClick={handleLogout}>LOGOUT</span> : ""}
      </div>
      <div className="nav_right">
        {user ? (
          <Link to="/settings" className="nav_img">
            <img
              src={user.profilePic}
              alt="person_img"
            />
          </Link>
        ) : (
          <div className="nav_login_logout">
            <span>
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </span>
            <span>|</span>
            <span>
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </span>
          </div>
        )}
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
