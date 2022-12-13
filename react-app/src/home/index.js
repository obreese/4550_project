import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import  "react-icons/bi/index";
import ContentList from "../list";
import {musics_json, posts_json, profile_items_json} from "../json_examples";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import './index.css';
import { findPostById } from "../posts/posts-service";

const HomeComponent = ({contentInitial = []}) => {
    const navigate = useNavigate()


    let { currentUser } = useSelector((state) => state.user);
    currentUser = {
        ...currentUser,
        posts: ['6398e7e0767cc1b947008624'],
    }

    const [posts, setPosts] = useState(undefined);

    const getPosts = async () => {
        const newPosts = await Promise.all(Array.from(currentUser.posts.map((pid) => findPostById(pid))))

        setPosts(newPosts);
    }

    useEffect(() => {
        getPosts();
    }, []);

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
            <ContentList arr={posts}/>
        </>
    );
};

export default HomeComponent;
