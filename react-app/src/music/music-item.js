import React from "react"
import "react-icons/bi/index"

import {renderIcon} from "./music-icon";
import {Link} from "react-router-dom";

const MusicItem = ({music}) => {

    return (
        <li className="list-group-item">
            <Link to={`/details?musicId=${music._id}&type=${music.music_type}`} className="row music-item rounded text-decoration-none">
                <div className="col-2 d-inline-flex align-items-center">
                    {renderIcon(music.music_type)}
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className={`col ${music.music_type === 'artist' && "fs-3"} music-text pt-2`}>{music.artist}</div>
                    </div>
                    {music.music_type !== 'artist' &&
                        <div className="row">
                            <div className={`col ${music.music_type === 'album' && "fs-3"} music-text`}>{music.album}</div>
                        </div>
                    }
                    {music.music_type === 'track' &&
                        <div className="row">
                            <div className={`col ${music.music_type === 'track' && "fs-3"} music-text`}>{music.song}</div>
                        </div>
                    }
                </div>
                <div className="col-3">
                    <img className="p-2" alt="album cover" height={100} src={
                        music.image ? music.image : '/images/default-artist.jpg'
                    }/>
                </div>
            </Link>
        </li>
    );
};
export default MusicItem;