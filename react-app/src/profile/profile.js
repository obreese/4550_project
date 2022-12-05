import React from "react";
import {useLocation} from "react-router-dom";
import PublicProfileComponent from "./public-profile";
import EditableProfileComponent from "./editable-profile";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const ProfileComponent = ({loggedIn = false}) => {
    const navigate = useNavigate()
    let location = useLocation().pathname.split("/")
    let myprofile = false
    let redirect = false
    if (location.length === 2 || (location.length === 3 && (location[2] === 'followers' || location[2] === 'following' || location[2] === ''))) {
        if (!loggedIn) {
            redirect = true
        } else {
            myprofile = true
        }
    }
    useEffect(() => {
        redirect && navigate("/login")
    })

    return (
        myprofile ? <EditableProfileComponent/> : <PublicProfileComponent/>
    );
};
export default ProfileComponent;