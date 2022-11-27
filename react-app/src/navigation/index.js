import React from "react";
import "./index.css";
import AvatarUser from "./avatarUser";
import { AiFillHome } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';


const NavigationSidebar = ({active = "home"}) => {
    return (
        <div className="list-group col-2">
            <a href="/" className="list-group-item">
                <img src={"images/logo-1.png"} className={"logo"}/>
            </a>
            <a
                href="/"
                className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
            >
                <AiFillHome/><p className="d-none d-md-none d-lg-inline"> Home</p>
            </a>
            <a
                href="/"
                className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
            >
                <FaUserCircle/><p className="mt-3 d-none d-md-none d-lg-inline"> Profile</p>
            </a>
            <AvatarUser loggedIn={true}/>
        </div>
    );
};
export default NavigationSidebar;
