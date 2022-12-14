import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import {useSelector, useDispatch} from "react-redux";
import {findUserByIdThunk} from "../user/user-thunk";

const ProfileComponent = ({myProfile}) => {
    console.log("Begin profileComponent")
    const {currentUser, profile} = useSelector((state) => state.user)
    let viewedId = '';
    //let viewedProfile = null
    const dispatch = useDispatch()

    let location = useLocation().pathname.split("/")
    if (location.length === 2 || (location.length === 3 && location[2] === '')) {
            viewedId = '' + currentUser._id;
            //viewedProfile = currentUser
    }
    else {
        viewedId = location[2]
        //dispatch(findUserByIdThunk(location[2]))
        //viewedProfile = profile
    }

    if ((currentUser && myProfile) || (currentUser && currentUser.isAdmin)) {
        return <EditableProfileComponent profileId={viewedId}/>
    } else {
        return <PublicProfileComponent profileId={viewedId}/>
    }
};
export default ProfileComponent;