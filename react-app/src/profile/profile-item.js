import React from "react"
import  "react-icons/bi/index"
import {Link} from "react-router-dom";

const ProfileItem = ({profile}) => {

    return (
        <li className="list-group-item">
        <Link to={"/profile/" + profile.username} className="row rounded text-decoration-none text-black">
            <p className="fs-3">{profile.firstName + " " + profile.lastName}</p>
            <p className="fs-5 text-secondary">{"@" + profile.username}</p>
        </Link>
        </li>
    );
};

export default ProfileItem;