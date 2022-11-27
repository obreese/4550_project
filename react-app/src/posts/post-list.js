import React, {useEffect} from "react";
import PostItem from "./post-item";

const PostList = ({
                      postList = [{
                          "_id": 1234,
                          "user": "Me",
                          "userName": "user",
                          "time": "2h",
                          "type": "song",
                          "image": "album-cover.jpeg",
                          "link": "spotify.com",
                          "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                      }]
                  }) => {
    return(

        <ul className="pt-3 list-group">
            {postList.map(post => <PostItem key={post._id} post={post}/> )}
        </ul>
    );
};
export default PostList;