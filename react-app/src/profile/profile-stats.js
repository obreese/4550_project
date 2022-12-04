import React from "react";
import ContentList from "../list"
import {Link, useLocation} from "react-router-dom";

const ProfileStats = ({profile, myprofile=false}) => {
    let location = useLocation().pathname.split("/").pop();
    if (location !== "following" && location !== "followers") location = "posts"
    return (
        <>
            <ul className="nav nav-pills mb-2">
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${location === "posts" ? "active" : ""}`}
                          to={myprofile ? "/profile" : "/profile/" + profile.username}>{profile.posts} {profile.posts === 1 ? "Post" : "Posts"}</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${location === "followers" ? "active" : ""}`}
                          to={myprofile ? "/profile/followers" : "/profile/" + profile.username + "/followers"}>{profile.followers} Followers</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${location === "following" ? "active" : ""}`}
                          to={myprofile ? "/profile/following" : "/profile/" + profile.username + "/following"}>{profile.following} Following</Link>
                </li>
            </ul>
            <ContentList arr={profile.arr}/>
        </>
    );
};
export default ProfileStats;