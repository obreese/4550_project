import React,{ useState } from "react";
import "react-icons/bi/index";
import "./index.css"
import {Link} from "react-router-dom";
import "./signup.css"
import {ProfileColors} from "./profile-colors";
import ColorPickerComponent from "./color-picker";
import {useSelector} from "react-redux";


const SignUpComponent = () => {



    const [profileColor, setProfileColor] = useState("#3EA4D6");

    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="profile-color" style={{backgroundColor: profileColor}}></div>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {ProfileColors.map(color => <li key={color} onClick={() => setProfileColor(color)}><a className="dropdown-item"><div className="profile-color" style={{backgroundColor: color}}></div></a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="fname-input">First Name</label>
                            <input className="form-control rounded-pill ps-3" name="fname-input" type="text"
                                   placeholder="John"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="lname-input">Last Name</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="lname-input" type="text"
                                   placeholder="Appleseed"></input>
                        </div>
                    </div>
                    <label htmlFor="email-input">Email</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                           placeholder="artist@music.com"></input>
                    <label htmlFor="user-input">Username</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="user-input" type="text"
                           placeholder="japple"></input>
                    <label htmlFor="pass-input">Password</label>
                    <input className="form-control rounded-pill ps-3" name="pass-input" type="password"
                           placeholder="password"></input>
                    <label htmlFor="pass2-input">Confirm Password</label>
                    <input className="form-control rounded-pill ps-3" name="pass2-input" type="password"
                           placeholder="password"></input>
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