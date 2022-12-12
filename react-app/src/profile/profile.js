import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const {loggedIn, isAdmin} = useSelector((state) => state.user)
    let location = useLocation().pathname.split("/")
    let myProfile = false
    if (location.length === 2 || (location.length === 3 && location[2] === '')) {
            myProfile = true
    }

    if ((loggedIn && myProfile) || (loggedIn && isAdmin)) {
        return <EditableProfileComponent/>
    } else {
        return <PublicProfileComponent/>
    }
};
export default ProfileComponent;