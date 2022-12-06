import React from "react";
import {Link} from "react-router-dom";
import ProfileStats from "./profile-stats";
import {editable_profile_json} from "../json_examples";

const EditableProfileComponent = ({
                                     profile = editable_profile_json}) => {
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
                                           type="text" defaultValue={editable_profile_json.fname}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="lname-input">Last Name</label>
                                    <input className="form-control rounded-pill ps-3 mb-3" name="lname-input"
                                           type="text" defaultValue={editable_profile_json.lname}/>
                                </div>
                            </div>
                            <label htmlFor="email-input">Email</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                                   placeholder="artist@music.com" defaultValue={editable_profile_json.email}/>
                            <label htmlFor="user-input">Username</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="user-input"
                                   type="text" defaultValue={editable_profile_json.username}/>
                            <div className="row">
                                <div className="col-3">
                                    <button type="button" className={"btn active"}>Save</button>
                                </div>
                                <div className="col-5">
                                    <button type="button" className={"btn btn-danger"}>Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileStats profile={profile}/>
                </div>
            </div>
        </div>
    );
};
export default EditableProfileComponent;