import React from "react";
import ContentList from "../list"
import {Link, useLocation} from "react-router-dom";

const ProfileStats = ({profile}) => {
    let profileLocation = useLocation().pathname.split("/")
    if (profileLocation[profileLocation.length - 1] === "followers" || profileLocation[profileLocation.length - 1] === "following" ||
    profileLocation[profileLocation.length - 1] === "") {
        profileLocation.pop()
    }

    let statsLocation = useLocation().pathname.split("/")
    if (statsLocation[statsLocation.length - 1] !== "followers" && statsLocation[statsLocation.length - 1] !== "following") {
        statsLocation = 'posts'
    } else if (statsLocation[statsLocation.length - 1] === "followers") {
        statsLocation = 'followers'
    } else if (statsLocation[statsLocation.length - 1] === "following") {
        statsLocation = 'following'
    }

    return (
        <>
            <ul className="nav nav-pills mb-2">
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${statsLocation === "posts" ? "active" : ""}`}
                          to={profileLocation.join('/')}>{profile.posts} {profile.posts === 1 ? "Post" : "Posts"}</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${statsLocation === "followers" ? "active" : ""}`}
                          to={profileLocation.join('/') + "/followers"}>{profile.followers} Followers</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${statsLocation === "following" ? "active" : ""}`}
                          to={profileLocation.join('/') + "/following"}>{profile.following} Following</Link>
                </li>
            </ul>
            <ContentList arr={profile.body} editablePosts={profile.type === 'edit_profile'}/>
        </>
    );
};
export default ProfileStats;