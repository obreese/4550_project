import React from "react";
import {logoutThunk} from "../user/user-thunk";
import {useDispatch} from "react-redux";

const LogoutComponent = () => {
    const dispatch = useDispatch()
    dispatch(logoutThunk())
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col fs-3 m-3">
                    You have been signed out.
                </div>
            </div>
        </div>
    );
};
export default LogoutComponent;