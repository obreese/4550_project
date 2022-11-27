import React from "react";
import NavigationSidebar from "../navigation";
import "react-icons/bi/index";
import PostList from "../posts/post-list"
import {Link, useLocation} from "react-router-dom";

const PrivateProfileComponent = ({
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

                    <ul className="nav nav-pills mb-2">
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "posts" ? "active" : ""}`}
                                  to={"/myprofile"}>{profile.posts.length} {profile.posts.length === 1 ? "Post" : "Posts"}</Link>
                        </li>
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "followers" ? "active" : ""}`}
                                  to={"/myprofile/followers"}>{profile.followers} Followers</Link>
                        </li>
                        <li className={"list-group-item"}>
                            <Link className={`nav-link p-1 ${location === "following" ? "active" : ""}`}
                                  to={"/myprofile/following"}>{profile.following} Following</Link>
                        </li>
                    </ul>
                    <PostList postList={profile.posts}/>
                </div>
            </div>
        </div>
    );
};
export default PrivateProfileComponent;