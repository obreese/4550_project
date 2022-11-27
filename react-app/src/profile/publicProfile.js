import React from "react";
import NavigationSidebar from "../navigation";
import "react-icons/bi/index";
import PostList from "../posts/post-list"
import {Link, useLocation} from "react-router-dom";

const PublicProfileComponent = ({
                                    profile = {
                                        "fname": "John",
                                        "lname": "Appleseed",
                                        "username": "johnnyh",
                                        "followers": "100",
                                        "following": "99",
                                        "posts": [{
                                            "_id": 1234,
                                            "user": "Me",
                                            "userName": "user",
                                            "time": "2h",
                                            "type": "song",
                                            "image": "album-cover.jpeg",
                                            "link": "spotify.com",
                                            "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                        }, {
                                            "_id": 1235,
                                            "user": "Me",
                                            "userName": "user",
                                            "time": "2h",
                                            "type": "song",
                                            "image": "album-cover.jpeg",
                                            "link": "spotify.com",
                                            "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                        }
                                        ]
                                    }
                                }) => {
    var location = useLocation().pathname.split("/").pop();
    if (location !== "following" && location !== "followers") location = "posts"
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <p className="fs-3">{profile.fname + " " + profile.lname}</p>
                    <p className="fs-5 text-secondary">{"@" + profile.username}</p>

                    <ul className="nav nav-pills mb-2">
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "posts" ? "active" : ""}`} to={"/profile/" + profile.username}>{profile.posts.length} {profile.posts.length === 1 ? "Post" : "Posts"}</Link>
                        </li>
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "followers" ? "active" : ""}`}
                                to={"/profile/" + profile.username + "/followers"}>{profile.followers} Followers</Link>
                        </li>
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "following" ? "active" : ""}`}
                                to={"/profile/" + profile.username + "/following"}>{profile.following} Following</Link>
                        </li>
                    </ul>
                    <PostList postList={profile.posts}/>
                </div>
            </div>
        </div>
    );
};
export default PublicProfileComponent;