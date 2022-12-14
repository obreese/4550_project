import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import  "react-icons/bi/index";
import ContentList from "../list";
import {createSearchParams, useNavigate} from "react-router-dom";
import { findAllMusicThunk } from "../music/search-results-thunk";
import { FaSpinner } from "react-icons/fa";

const SearchComponent = ({contentInitial = []}) => {
    const dispatch = useDispatch()

    const { results, resultsLoading } = useSelector((state) => state.searchResults);
    const navigate = useNavigate()

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let searchTerm = urlParams.get('search')

 
    useEffect(() => {
        dispatch(findAllMusicThunk(searchTerm))
    }, [])

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
            <input placeholder="Search Music"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown}
                type="search"/>
            { (searchTerm != null) && results ? resultsLoading ? <>Loading... <FaSpinner/></> : <ContentList arr={results}/> : <ContentList/> }
        </>
    );
};

export default SearchComponent;
