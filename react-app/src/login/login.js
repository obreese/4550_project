import React from "react";
import  "react-icons/bi/index";
import "./index.css"
import {Link} from "react-router-dom";

const LoginComponent = () => {
    return (
        <div className={"border rounded"}>
    <div className="row rounded">
        <div className="col p-5">
        <p>Email</p>
        <input className="form-control rounded-pill ps-3 mb-5" type="email" placeholder="artist@music.com"></input>
        <p>Password</p>
        <input className="form-control rounded-pill ps-3" type="password"></input>
        </div>
    </div>
            <ul className="nav nav-pills mb-2 p-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
};
export default LoginComponent;