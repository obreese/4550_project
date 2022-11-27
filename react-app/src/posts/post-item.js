import React from "react";
import MusicItem1 from "./music-item";
const PostItem = ({
                      post = {
                          "_id": 1234,
                          "user": "Me",
                          "userName": "user",
                          "time": "2h",
                          "type": "song",
                          "image": "album-cover.jpeg",
                          "link": "spotify.com",
                          "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                      }
                  }) => {
    return (
        <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                         {post.user} <p className={"d-inline text-secondary"}>{'@' + post.userName} - {post.time}</p>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col">
                            {post.body}
                        </div>
                        <div className="col-3 col-xs-3 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-3 float-right d-inline-flex align-items-center">
                            <MusicItem1/>
                        </div>
                    </div>
        </li>

    );
};
export default PostItem;