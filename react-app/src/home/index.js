import React, { useState } from "react";
import  "react-icons/bi/index";
import ContentList from "../list";
import { findAllMusic } from "../music/music-service"
import "./index.css"

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

        setContent(musicDataList);
    }

    const handleKeyDown = (event) => {
        const searchTerm = event.target.value;
        if (event.key === 'Enter') {
            if (searchTerm !== "") {
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
            <img src="/images/logo-2.png" className="big-logo pb-3"/>
            <input placeholder="Search People and Music"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown} // todo make sure x works and fix overflow error
                type="search"/>
            <ContentList arr={content}/>
        </>
    );
};

export default HomeComponent;
