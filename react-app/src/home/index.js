import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import  "react-icons/bi/index";
import ContentList from "../list";
import {createSearchParams, useNavigate} from "react-router-dom";
import './index.css';
import { findPostsByUserId } from "../posts/posts-service";

const HomeComponent = () => {
    const navigate = useNavigate()

    const { currentUser } = useSelector((state) => state.user);

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const newPosts = await Promise.all(Array.from(currentUser.following.map((uid) => findPostsByUserId(uid))))

        setPosts(newPosts.flat());
    }

    useEffect(() => {
        if (currentUser) {
            getPosts();
        }
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
