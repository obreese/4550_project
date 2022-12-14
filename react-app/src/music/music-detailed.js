import React, { useEffect, useState } from "react"
import { useSelector, useDispatch} from "react-redux";
import "react-icons/bi/index"
import {renderIcon} from "./music-icon";
import {TiArrowForward} from "react-icons/ti"
import CreatePostItem from "../posts/create-post-item"
import {Link} from "react-router-dom";
import { findMusicDetailsByIdThunk } from "./search-results-thunk";
import { FaSpinner } from "react-icons/fa";
import { findPostsByMusicId } from "../posts/posts-service";
import ContentList from "../list";

const MusicDetailedComponent = () => {
    const dispatch = useDispatch()

    const { currentUser } = useSelector((state) => state.user);
    const { musicDetails, musicDetailsLoading } = useSelector((state) => state.searchResults);

    const [posts, setPosts] = useState([]);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const getPosts = async (music_id) => {
        const newPosts = await findPostsByMusicId(music_id);
        newPosts.sort((post1, post2) => (post1.time < post2.time) ? 1 : -1)
        setPosts(newPosts);
    }

    useEffect(() => {
        const findMusicDetailsParams = {
            music_id: urlParams.get('musicId'),
            type: urlParams.get("type")
        }
        dispatch(findMusicDetailsByIdThunk(findMusicDetailsParams))
    }, [])

    useEffect(() => {
        if (musicDetails?._id) {
            getPosts(musicDetails._id);
        }
    }, [musicDetails])

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
                        <div className={`col ${musicDetails.music_type === 'artist' && "fs-3"} music-text`}>{musicDetails.artist}</div>
                    </div>
                    {musicDetails.music_type !== 'artist' &&
                        <div className="row">
                            <div className={`col ${musicDetails.music_type === 'album' && "fs-3"} music-text`}>{musicDetails.album}</div>
                        </div>
                    }
                    {musicDetails.music_type === 'track' &&

                        <div className="row">
                            <div className={`col ${musicDetails.music_type === 'track' && "fs-3"} music-text`}>{musicDetails.song}</div>
                        </div>
                    }
                    {musicDetails.extra_info &&
                    <div className="row ml-5 mt-2 mb-2">
                        <div className="col">
                            <div className="p-1 info-box rounded-3">{musicDetails.extra_info}</div>
                        </div>
                    </div>}
                </div>
                <div className="col-3">
                    <img className="p-2" alt="album cover" height={130} src={
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
            {currentUser ? <CreatePostItem music={musicDetails} updatePosts={getPosts}/> :
                <Link to="/login" className="p-4 fs-3 text-black">Login to post</Link>}
            </div>
            <div className="row">
            {posts.length >= 0 && <ContentList arr={posts}/>}
            {currentUser && posts.length === 0 && "Be the first to post"}
            </div> 
        </>
    );
};
export default MusicDetailedComponent;