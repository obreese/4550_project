import React from "react"
import  "react-icons/bi/index"
import "./music.css"
import {renderIcon} from "./music-icon";

const MusicLinkItem = ({music}) => {

    return (
            <a href={music.link} className="music-item p-2 rounded text-decoration-none" target="_blank" rel="noopener noreferrer">
                <div className="row">
                <div className="col pr-5 d-inline-flex align-items-center">
                    {renderIcon(music['music-type'])}
                </div>
                <div className="col">
                    <img className="img-fluid" alt="album cover" height={100} src={`/images/${music.image}`}/>
                </div>
                </div>
                <div className="row">
                    <div className="col music-link-text">{music.artist}</div>
                </div>
                {music['music-type'] !== 'artist' &&
                    <div className="row">
                        <div className="col music-link-text">{music.album}</div>
                    </div>
                }
                {music['music-type'] === 'song' &&
                    <div className="row">
                        <div className="col music-link-text">{music.song}</div>
                    </div>
                }
            </a>
    );
};
export default MusicLinkItem;