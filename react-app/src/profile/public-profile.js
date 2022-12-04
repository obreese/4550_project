import React from "react";
import ProfileStats from "./profile-stats";

const PublicProfileComponent = ({
                                    profile = {
                                        "fname": "John",
                                        "lname": "Appleseed",
                                        "username": "johnnyh",
                                        "followers": "100",
                                        "following": "99",
                                        "posts": 44,
                                        "arr": []
                                    }
                                }) => {
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <p className="fs-3">{profile.fname + " " + profile.lname}</p>
                    <p className="fs-5 text-secondary">{"@" + profile.username}</p>
                    <ProfileStats profile={profile} myprofile={false}/>
                </div>
            </div>
        </div>
    );
};
export default PublicProfileComponent;