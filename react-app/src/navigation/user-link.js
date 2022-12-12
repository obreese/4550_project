import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const UserLink = () => {

    const {loggedIn, currentUser} = useSelector((state) => state.user)

    return (
        <Link to={loggedIn ? "/logout" : "/login"} className="list-group-item">
            <div className="row align-middle">
                <div className="col-4">
                    {loggedIn ?
                        <div style={{backgroundColor: currentUser.color}} className={"avatar"}></div> :
                        <img src={"/images/avatar.png"} className={"avatar"}/> }
                    </div>
                <div className="col-5 align-middle mt-1">
                    <p className="d-none d-md-none d-lg-inline">
                        {loggedIn ? "Logout" : "Login/ SignUp"}
                    </p>
                </div>
            </div>
        </Link>
    );
};
export default UserLink;