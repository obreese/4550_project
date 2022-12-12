import React, { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux";
import "react-icons/bi/index"
import {renderIcon} from "./music-icon";
import {TiArrowForward} from "react-icons/ti"
import ContentList from "../list";
import CreatePostItem from "../posts/create-post-item"
import {Link} from "react-router-dom";
import {music_detailed_json} from "../json_examples";
import { findMusicDetailsByIdThunk } from "./search-results-thunk";
import { FaSpinner } from "react-icons/fa";

const MusicDetailedComponent = () => {
    const dispatch = useDispatch()

    const { loggedIn } = useSelector((state) => state.user);
    const { musicDetails, musicDetailsLoading } = useSelector((state) => state.searchResults);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);



    useEffect(() => {
        const findMusicDetailsParams = {
            music_id: urlParams.get('musicId'),
            type: urlParams.get("type")
        }
        dispatch(findMusicDetailsByIdThunk(findMusicDetailsParams))
    }, [])

    let spotifyLink = "";
    if (musicDetails) {
        spotifyLink = 'https://open.spotify.com/' + musicDetails.music_type + '/' + musicDetails._id
    }


    return (
        musicDetailsLoading ? <>Loading... <FaSpinner/></> :
        <>
            <div className="row music-item rounded">
                <div className="col-1 d-inline-flex align-items-center">
                    {renderIcon(musicDetails.music_type)}
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col fs-3 music-text">{musicDetails.artist}</div>
                    </div>
                    {musicDetails.music_type !== 'artist' &&
                        <div className="row">
                            <div className="col music-text">{musicDetails.album}</div>
                        </div>
                    }
                    {musicDetails.music_type === 'song' &&
                        <div className="row">
                            <div className="col music-text">{musicDetails.song}</div>
                        </div>
                    }
                </div>
                <div className="col-3">
                    <img className="p-2" alt="album cover" height={100} src={
                        musicDetails.image ? musicDetails.image : '/images/default-artist.jpg'
                    }/>
                </div>
                <div className="col-2 d-inline-flex align-items-center">
                    <a href={spotifyLink} target="_blank" rel="noopener noreferrer"
                       className="text-decoration-none music-item">
                        <TiArrowForward size={40}/>
                    </a>
                </div>
            </div>
            <div className="row border rounded p-2 mt-3 mb-3">
            {loggedIn ? <CreatePostItem music={musicDetails}/> :
                <Link to="/login" className="p-4 fs-3 text-black">Login to post</Link>}
            </div>
            <div className="row">
            {/* <ContentList arr={music.posts}/> todo uncomment */}
            {/* {loggedIn && music.posts.length === 0 && "Be the first to post"} */}
            </div> 
        </>
    );
};
export default MusicDetailedComponent;