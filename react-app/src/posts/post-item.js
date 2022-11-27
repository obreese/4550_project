import React from "react";
import MusicLinkItem from "../music/music-link-item";
import {timeConverter} from "../time";
import {Link} from "react-router-dom";

const PostItem = ({post}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col">
                            {post.fname + " " + post.lname} <p className={"d-inline text-secondary"}>
                            <Link className="text-secondary" to={"/profile/" + post.username}>{'@' + post.username}</Link> - {timeConverter(post.time)}</p>
                        </div>
                    </div>
                    <div className="row p-2">
                        {post.body}
                    </div>
                </div>
                <div
                    className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-4 col-xxl-4 float-right d-inline-flex align-items-center">
                    <MusicLinkItem music={post.music}/>
                </div>
            </div>
        </li>

    );
};
export default PostItem;