import React from "react";
import {Link} from "react-router-dom";
import ProfileStats from "./profile-stats";

const PrivateProfileComponent = ({
                                     profile = {
                                         "fname": "John",
                                         "lname": "Appleseed",
                                         "username": "johnnyh",
                                         "followers": "100",
                                         "following": "99",
                                         "posts": "44",
                                         "arr": []
                                     }
                                 }) => {
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row pb-5">
                        <div className="col p-5">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="fname-input">First Name</label>
                                    <input className="form-control rounded-pill ps-3" name="fname-input"
                                           type="text"></input>
                                </div>
                                <div className="col">
                                    <label htmlFor="lname-input">Last Name</label>
                                    <input className="form-control rounded-pill ps-3 mb-3" name="lname-input"
                                           type="text"></input>
                                </div>
                            </div>
                            <label htmlFor="email-input">Email</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                                   placeholder="artist@music.com"></input>
                            <label htmlFor="user-input">Username</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="user-input"
                                   type="text"></input>
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className={"btn active"}>Save</button>
                                </div>
                                <div className="col">
                                    <Link to="/reset">Reset Password</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileStats profile={profile} myprofile={true}/>
                </div>
            </div>
        </div>
    );
};
export default PrivateProfileComponent;