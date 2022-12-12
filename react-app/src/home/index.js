import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import  "react-icons/bi/index";
import ContentList from "../list";
import { findAllMusic } from "../music/music-service"

import {musics_json, posts_json, profile_items_json} from "../json_examples";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import { findAllMusicThunk } from "../music/search-results-thunk";

// TODO get posts from user

const HomeComponent = ({contentInitial = []}) => {
    const dispatch = useDispatch()

    const { results, resultsLoading } = useSelector((state) => state.searchResults);
    // let search = useLocation().pathname.split("/").indexOf("search") > -1
    // let arr_e = musics_json.concat(profile_items_json)
    const navigate = useNavigate()
    // const [searchInput, setSearchInput] = useState("");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let searchTerm = urlParams.get('search')

    let location = useLocation().pathname.split("/")
    const isHome = location[0] === 'home';
 
    // useEffect(() => {
    //     if (!isHome) {
    //         dispatch(findAllMusicThunk(searchTerm))
    //     }
    // }, [])

    const handleKeyDown = (event) => {
        const searchTerm = event.target.value;
        if (event.key === 'Enter' && searchTerm !== "") {
            navigate({
                pathname: '/search',
                search: `?${createSearchParams({"search": searchTerm})}`,
            });

            dispatch(findAllMusicThunk(searchTerm));
        }
    }

    return (
        <>
            <input placeholder="Search People and Music"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown}
                type="search"/>
            { (results && !isHome) ? resultsLoading ? <>LOADING</> : <ContentList arr={results}/> : <ContentList arr={posts_json}/> } 
        </>
    );
};

export default HomeComponent;
