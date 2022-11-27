import React from "react";
import  "react-icons/bi/index";
import "./music-item.css"
import { FaHeart } from 'react-icons/fa';

const MusicItem1 = ({
                      post = {
                          "_id": 1234,
                          "user": "Me",
                          "userName": "user",
                          "time": "2h",
                          "type": "song",
                          "image": "album-cover.jpeg",
                          "link": "http://www.spotify.com",
                          "body": "I like this song"
                      }
                  }) => {

    const renderIcon = (musicType) => {
        switch(musicType) {
            case 'song':
                return <FaHeart size={30} className="img-fluid"/>
            case 'album':
                return <FaHeart size={30} className="img-fluid"/>
            case 'artist':
                return <FaHeart size={30} className="img-fluid"/>
            default:
                return <></>
        }
    }


    return (
            <a href={post.link} className="row music-item p-2 rounded" target="_blank" rel="noopener noreferrer">
                <div className="col pr-5 d-inline-flex align-items-center">
                    {renderIcon(post.type)}
                </div>
                <div className="col">
                    <img className="img-fluid" alt="album cover" height={100} src={`/images/${post.image}`}/>
                </div>
            </a>
    );
};
export default MusicItem1;