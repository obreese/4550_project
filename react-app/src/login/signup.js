import React from "react";
import "react-icons/bi/index";
import "./index.css"
import {Link} from "react-router-dom";

const SignUpComponent = () => {
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row">
                    <div className="col">
                        <label htmlFor="fname-input">First Name</label>
                        <input className="form-control rounded-pill ps-3" name="fname-input" type="text" placeholder="John"></input>
                    </div>
                        <div className="col">
                        <label htmlFor="lname-input">Last Name</label>
                        <input className="form-control rounded-pill ps-3 mb-3" name="lname-input" type="text" placeholder="Appleseed"></input>
                    </div>
                    </div>
                    <label htmlFor="email-input">Email</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                           placeholder="artist@music.com"></input>
                    <label htmlFor="user-input">Username</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="user-input" type="text" placeholder="japple"></input>
                    <label htmlFor="pass-input">Password</label>
                    <input className="form-control rounded-pill ps-3" name="pass-input" type="password" placeholder="password"></input>
                    <label htmlFor="pass2-input">Confirm Password</label>
                    <input className="form-control rounded-pill ps-3" name="pass2-input" type="password" placeholder="password"></input>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 p-3">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Sign Up</Link>
                </li>
            </ul>
        </div>
    );
};
export default SignUpComponent;