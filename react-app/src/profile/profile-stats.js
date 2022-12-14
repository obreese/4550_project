import React, {useState, useEffect} from "react";
import ContentList from "../list"
import {Link} from "react-router-dom";
import { findPostById } from "../posts/posts-service";
import { findUserById } from "../user/user-service";

const ProfileStats = ({user, editable}) => {
    const [posts, setPosts] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    const [currentListType, setCurrentListType] = useState('posts')

    const getStats = async () => {
        const newPosts = await Promise.all(Array.from(user.posts.map((pid) => findPostById(pid))))
        setPosts(newPosts);

        const newFollowers = await Promise.all(Array.from(user.followers.map((uid) => findUserById(uid))))
        setFollowers(newFollowers);

        const newFollowing = await Promise.all(Array.from(user.following.map((uid) => findUserById(uid))))
        setFollowing(newFollowing);
    }

    useEffect(() => {
        getStats();
    }, []);

    const setCurrentListTypeToPosts = () => {
        setCurrentListType('posts');
    }
    const setCurrentListTypeToFollowers = () => {
        setCurrentListType('followers')
    }
    const setCurrentListTypeToFollowing = () => {
        setCurrentListType('following')
    }
    
    return (
        <>
            <ul className="nav nav-pills mb-2">
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "posts" ? "active" : ""}`}
                          onClick={setCurrentListTypeToPosts}>{user.posts.length} Posts</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "followers" ? "active" : ""}`}
                          onClick={setCurrentListTypeToFollowers}>{user.followers.length} Followers</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "following" ? "active" : ""}`}
                          onClick={setCurrentListTypeToFollowing}>{user.following.length} Following</Link>
                </li>
            </ul>
            <ContentList arr={currentListType === 'posts' ? posts : currentListType === 'followers' ? followers : following} editablePosts={editable}/>
        </>
    );
};
export default ProfileStats;