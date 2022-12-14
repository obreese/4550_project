import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import {useSelector, useDispatch} from "react-redux";
import {findUserByIdThunk} from "../user/user-thunk";

const ProfileComponent = () => {

    const {currentUser, isAdmin, profile} = useSelector((state) => state.user)
    let viewedId = 0;
    //let viewedProfile = null
    const dispatch = useDispatch()

    let location = useLocation().pathname.split("/")
    let myProfile = false
    if (location.length === 2 || (location.length === 3 && location[2] === '')) {
            myProfile = true
            console.log("Passing the current id")
            viewedId = '' + currentUser._id;
            //viewedProfile = currentUser

    }
    else {
        console.log("Passing the Profile Id")
        viewedId = location[2]
        //dispatch(findUserByIdThunk(location[2]))
        //viewedProfile = profile
    }



    //console.log("This is being passed")
    //console.log(viewedId)
    //const {profile} = useSelector((state) => state.user)
    //console.log(profile)

    if ((currentUser && myProfile) || (currentUser && isAdmin)) {
        return <EditableProfileComponent profileId={viewedId}/>
    } else {
        return <PublicProfileComponent profileId={viewedId}/>
    }
};
export default ProfileComponent;