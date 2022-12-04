import React from "react";
import "./index.css";
import User from "./user";
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = "home", loggedIn = false}) => {
    return (
        <div className="list-group col-2">
            <Link to="/" className="list-group-item">
                <img src={"/images/logo-1.png"} className={"logo"}/>
            </Link>
            <Link
                to="/"
                className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
            >
                <AiFillHome/><p className="d-none d-md-none d-lg-inline"> Home</p>
            </Link>
            <Link
                to="/profile"
                className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
            >
                <FaUserCircle/><p className="mt-3 d-none d-md-none d-lg-inline"> Profile</p>
            </Link>
            <User loggedIn={loggedIn}/>
        </div>
    );
};
export default NavigationSidebar;
