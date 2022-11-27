import React from "react";
import NavigationSidebar from "../navigation";
import  "react-icons/bi/index";
import ContentList from "../list"

const HomeComponent = ({content = [{
    "type": "post",
    "_id": 1234,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "time": 1669582106,
    "music": {
        "type": "music",
        "_id": 1236,
        "music-type": "song",
        "song": "my really long song name that is a song",
        "album": "my really long album name that is a album",
        "artist": "my really long artist name that is a artist",
        "image": "album-cover.jpeg",
        "link": "http://www.spotify.com"
    },
    "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
},{
    "type": "profile",
    "_id": 1235,
    "fname": "Me",
    "lname": "Smith",
    "username": "user"
},{
    "type": "music",
    "_id": 1236,
    "music-type": "song",
    "song": "my really long song name that is a song. again my really long song name that is a song",
    "album": "my really long album name that is a album. again my really long album name that is a album",
    "artist": "my really long artist name that is a artist. again my really long artist name that is a artist",
    "image": "album-cover.jpeg",
    "link": "http://www.spotify.com"
}]}) => {
    return (
        <>
            <input placeholder="Search People and Music"
                   className="form-control rounded-pill ps-3"/>
            <ContentList arr={content}/>
        </>
    );
};
export default HomeComponent;
