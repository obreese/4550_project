import React from "react";
import "./index.css";
import AvatarUser from "./avatarUser";
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa'
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = "home"}) => {
    return (
        <div className="list-group col-2">
            <Link href="/" className="list-group-item">
                <img src={"images/logo-1.png"} className={"logo"}/>
            </Link>
            <Link
                to="/"
                className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
            >
                <AiFillHome/><p className="d-none d-md-none d-lg-inline"> Home</p>
            </Link>
            <Link
                to="/myprofile"
                className={`list-group-item
                    ${active === "myprofile" ? "active" : ""}`}
            >
                <FaUserCircle/><p className="mt-3 d-none d-md-none d-lg-inline"> Profile</p>
            </Link>
            <AvatarUser loggedIn={false}/>
        </div>
    );
};
export default NavigationSidebar;
