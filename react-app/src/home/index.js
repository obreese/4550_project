import React from "react";
import  "react-icons/bi/index";
import ContentList from "../list";
import {musics_json, posts_json, profile_items_json} from "../json_examples";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import './index.css';

// TODO get posts from user

const HomeComponent = ({contentInitial = []}) => {
    const navigate = useNavigate()
    const handleKeyDown = (event) => {
        const searchTerm = event.target.value;
        if (event.key === 'Enter' && searchTerm !== "") {
            navigate({
                pathname: '/search',
                search: `?${createSearchParams({"search": searchTerm})}`,
            });
        }
    }

    return (
        <>
            <img src="/images/logo-2.png" className="big-logo pb-3"/>
            <input placeholder="Search People and Music"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown}
                type="search"/>
            <ContentList arr={posts_json}/>
        </>
    );
};

export default HomeComponent;
