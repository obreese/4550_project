import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const AvatarUser = ({loggedIn = false}) => {
    return (
        <a href={loggedIn ? "/logout" : "/login"} className="list-group-item">
            <div className="row align-middle">
                <div className="col-4"><img src={"images/avatar.png"} className={"avatar"}/></div>
                <div className="col-5 align-middle mt-1">{loggedIn ? "Logout" : "Login"}</div>
            </div>
        </a>
    );
};
export default AvatarUser;