import React from "react"
import "react-icons/bi/index"
import {renderIcon} from "./music-icon";
import {TiArrowForward} from "react-icons/ti"
import ContentList from "../list";
import CreatePostItem from "../posts/create-post-item"
import {Link} from "react-router-dom";


const MusicDetailedComponent = ({
                                    music = {
                                        "type": "music-detailed",
                                        "_id": 1236,
                                        "music-type": "song",
                                        "song": "my really long song name that is a song. again my really long song name that is a song",
                                        "album": "my really long album name that is a album. again my really long album name that is a album",
                                        "artist": "my really long artist name that is a artist. again my really long artist name that is a artist",
                                        "image": "album-cover.jpeg",
                                        "link": "http://www.spotify.com",
                                        "posts": []
                                    },
                                loggedIn = true}) => {

    return (
        <>
            <div className="row music-item rounded">
                <div className="col-1 d-inline-flex align-items-center">
                    {renderIcon(music['music-type'])}
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col fs-3 music-text">{music.artist}</div>
                    </div>
                    {music['music-type'] !== 'artist' &&
                        <div className="row">
                            <div className="col music-text">{music.album}</div>
                        </div>
                    }
                    {music['music-type'] === 'song' &&
                        <div className="row">
                            <div className="col music-text">{music.song}</div>
                        </div>
                    }
                </div>
                <div className="col-3">
                    <img className="p-2" alt="album cover" height={100} src={`/images/${music.image}`}/>
                </div>
                <div className="col-2 d-inline-flex align-items-center">
                    <a href={music.link} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-none music-item">
                        <TiArrowForward size={40}/>
                    </a>
                </div>
            </div>
            <div className="row border rounded p-2 mt-3 mb-3">
            {loggedIn ? <CreatePostItem music={music}/> :
                <Link to="/login" className="p-4 fs-3 text-black">Login to post</Link>}
            </div>
            <div className="row">
            <ContentList arr={music.posts}/>
            {loggedIn && music.posts.length === 0 && "Be the first to post"}
            </div>
        </>
    );
};
export default MusicDetailedComponent;