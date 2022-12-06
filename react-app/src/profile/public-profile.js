import React from "react";
import ProfileStats from "./profile-stats";
import {profile_json} from "../json_examples";

const PublicProfileComponent = ({
                                    profile = profile_json}) => {
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <p className="fs-3">{profile.fname + " " + profile.lname}</p>
                    <p className="fs-5 text-secondary">{"@" + profile.username}</p>
                    <ProfileStats profile={profile}/>
                </div>
            </div>
        </div>
    );
};
export default PublicProfileComponent;