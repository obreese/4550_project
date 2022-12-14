import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import  "react-icons/bi/index";
import ContentList from "../list";
import {createSearchParams, useNavigate} from "react-router-dom";
import './index.css';
import { findAllPosts, findPostsByUserId } from "../posts/posts-service";

const HomeComponent = () => {
    const navigate = useNavigate()

    const { currentUser } = useSelector((state) => state.user);

    const [posts, setPosts] = useState([]);

    const getFollowingPosts = async () => {
        const newPosts = await Promise.all(Array.from(currentUser.following.map((uid) => findPostsByUserId(uid))))
        newPosts.sort((post1, post2) => (post1.time < post2.time) ? 1 : -1)

        if (newPosts) {
            setPosts(newPosts.flat());
        } else {
            getRecentPosts();
        }
    }

    const getRecentPosts = async () => {
        const newPosts = await findAllPosts();
        newPosts.sort((post1, post2) => (post1.time < post2.time) ? 1 : -1)

        setPosts(newPosts.slice(0, 10));
    }

    useEffect(() => {
        if (currentUser && !currentUser.isAdmin) {
            getFollowingPosts();
        } else {
            getRecentPosts();
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
            <input placeholder="Search for Music and Artists"
                className="form-control rounded-pill ps-3"
                onKeyDown={handleKeyDown}
                type="search"/>
            {posts.length === 0 ? <p>Follow users to see their posts!</p> : <ContentList arr={posts}/>}
        </>
    );
};

export default HomeComponent;
