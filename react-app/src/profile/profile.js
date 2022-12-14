import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import {useSelector} from "react-redux";

const ProfileComponent = ({myProfile}) => {
    const {currentUser } = useSelector((state) => state.user)
    let viewedId = '';

    let location = useLocation().pathname.split("/")
    if (location.length === 2 || (location.length === 3 && location[2] === '')) {
        viewedId = '' + currentUser._id;
    }
    else {
        viewedId = location[2]
    }

    if ((currentUser && myProfile) || (currentUser && currentUser.isAdmin)) {
        return <EditableProfileComponent profileId={viewedId} myProfile={myProfile}/>
    } else {
        return <PublicProfileComponent profileId={viewedId}/>
    }
};
export default ProfileComponent;