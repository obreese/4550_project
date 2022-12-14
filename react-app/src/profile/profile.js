import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import {useSelector, useDispatch} from "react-redux";
import {findUserByIdThunk} from "../user/user-thunk";

const ProfileComponent = () => {
    const {currentUser, isAdmin} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    let location = useLocation().pathname.split("/")
    let myProfile = false
    if (location.length === 2 || (location.length === 3 && location[2] === '')) {
            myProfile = true
    }
    else {
        const profileID = location[2]
        dispatch(findUserByIdThunk({profileID}))
    }

    if ((currentUser && myProfile) || (currentUser && isAdmin)) {
        return <EditableProfileComponent/>
    } else {
        return <PublicProfileComponent/>
    }
};
export default ProfileComponent;