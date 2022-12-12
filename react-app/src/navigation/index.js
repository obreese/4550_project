import React from "react";
import "./index.css";
import UserLink from "./user-link";
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";


const NavigationSidebar = () => {
    const {loggedIn} = useSelector((state) => state.user)
    let location = useLocation().pathname.split("/")
    if (location.length > 1 && location[1] === "") {
        location = "home"
    } else if ((location.length === 3 && location[1] === 'profile' && location[2] === '')) {
        location = "profile"
    } else {
        location = location.pop()
    }
    return (
        <div className="list-group col-2">
            <Link to="/" className="list-group-item">
                <img src={"/images/logo-1.png"} className={"logo"}/>
            </Link>
            <Link
                to="/"
                className={`list-group-item
                    ${location === "home" ? "active" : ""}`}
            >
                <AiFillHome/><p className="d-none d-md-none d-lg-inline"> Home</p>
            </Link>
            {loggedIn &&
            <Link
                to="/profile"
                className={`list-group-item
                    ${location === "profile" ? "active" : ""}`}
            >
                <FaUserCircle/><p className="mt-3 d-none d-md-none d-lg-inline"> Profile</p>
            </Link>}
            <UserLink/>
        </div>
    );
};
export default NavigationSidebar;
