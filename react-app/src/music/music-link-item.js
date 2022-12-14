import React from "react"
import  "react-icons/bi/index"
import "./music.css"
import {renderIcon} from "./music-icon";
import {Link} from "react-router-dom";

const MusicLinkItem = ({music}) => {
    return (
            <Link to={"/details?musicId=" + music._id + "&type=" + music.music_type} className="music-item p-2 rounded text-decoration-none">
                <div className="row">
                <div className="col pr-5 d-inline-flex align-items-center">
                    {renderIcon(music.music_type)}
                </div>
                <div className="col">
                    <img className="img-fluid" alt="album cover"
                         height={100} src={
                             music.image ? music.image : '/images/default-artist.jpg'
                         }/>
                </div>
                </div>
                <div className="row">
                    <div className="col music-link-text">{music.artist}</div>
                </div>
                {music.music_type !== 'artist' &&
                    <div className="row">
                        <div className="col music-link-text">{music.album}</div>
                    </div>
                }
                {music.music_type === 'track' &&
                    <div className="row">
                        <div className="col music-link-text">{music.song}</div>
                    </div>
                }
            </Link>
    );
};
export default MusicLinkItem;