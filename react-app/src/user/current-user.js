import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {profileThunk} from "./user-thunk";

const CurrentUser = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}
export default CurrentUser