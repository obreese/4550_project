import React, { useState } from "react";
import  "react-icons/bi/index";
import ContentList from "../list";
import { findAllMusic } from "../music/music-service"

import {musics_json, posts_json, profile_items_json} from "../json_examples";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

const HomeComponent = ({contentInitial = []}) => {
    // let search = useLocation().pathname.split("/").indexOf("search") > -1
    // let arr_e = musics_json.concat(profile_items_json)
    const navigate = useNavigate()
    // const [searchInput, setSearchInput] = useState("");
    const [content, setContent] = useState(posts_json); // todo should change this is a proof of concept

    const getSearchResults = async (searchInput) => {
        const musicDataList = await findAllMusic(searchInput); // await and async should change when we use thunks

        console.log(musicDataList)
        const newItems = musicDataList.map(musicData => { // todo whats the difference between music id and id?
            return {
                type: "music",
                _id: musicData.id,
                music_type: musicData.type === 'track' ? "song" : musicData.type,
                song: musicData.name,
                album: musicData.album.name,
                artist: musicData.artists[0].name, // todo allow multiple
                image: musicData.album.images[0].url,
                music_id: musicData.id, 
            }
        });
        console.log(newItems)
        setContent(newItems);
    }

    const handleKeyDown = (event) => {
        const searchTerm = event.target.value;
        if (event.key === 'Enter') {
            if (searchTerm === "") {
                navigate({
                    pathname: '/',
                });
                
                setContent(posts_json)
            }
            else {
                navigate({
                    pathname: '/search',
                    search: `?${createSearchParams({"search": searchTerm})}`, // todo do we really need this
                });

                getSearchResults(searchTerm)
            }
            
        }
    }

    return (
        <>
            <input placeholder="Search People and Music"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown} // todo make sure x works
                type="search"/>
            <ContentList arr={content}/>
        </>
    );
};

export default HomeComponent;
