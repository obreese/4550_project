import React from "react";
import "react-icons/bi/index";
import "./index.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";
import {loginThunk} from "./../user/user-thunk";

const LoginComponent = () => {
    const {currentUser, failed} = useSelector((state) => state.user)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleLoginBtn = () => {
        try {
            dispatch(loginThunk({username, password}));
        } catch (e) {

        }
    }

    if (currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    return (
        <>
            {failed && <div className="alert alert-danger" role="alert">
                Bad Username / Password
            </div>}
            <div className={"border rounded"}>
                <div className="row rounded">
                    <div className="col p-5">
                        <p>Username</p>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control rounded-pill ps-3 mb-5" type="text" placeholder="username"></input>
                        <p>Password</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-pill ps-3" type="password" placeholder="password"></input>
                    </div>
                </div>
                <ul className="nav nav-pills mb-2 p-3">
                    <li className="nav-item">
                        <Link
                            onClick={handleLoginBtn}
                            className="nav-link active">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default LoginComponent;