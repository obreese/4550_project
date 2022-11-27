import React from "react"
import "react-icons/bi/index"

import {renderIcon} from "./music-icon";

const MusicItem = ({music}) => {

    return (
        <li className="list-group-item">
            <a href={music.link} className="row music-item rounded text-decoration-none" target="_blank" rel="noopener noreferrer">
                <div className="col-2 d-inline-flex align-items-center">
                    {renderIcon(music['music-type'])}
                </div>
                <div className="col-7">
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
            </a>
        </li>
    );
};
export default MusicItem;