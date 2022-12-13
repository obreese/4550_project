import React, {useState} from "react";
import ContentList from "../list"
import {Link} from "react-router-dom";

const ProfileStats = ({user, editable}) => {


    const [currentList, setCurrentList] = useState(user.posts)
    const [currentListType, setCurrentListType] = useState('posts')

    const setPosts = () => {
        setCurrentListType('posts')
        setCurrentList(user.posts)
    }
    const setFollowers = () => {
        setCurrentListType('followers')
        setCurrentList(user.followers)
    }
    const setFollowing = () => {
        setCurrentListType('following')
        setCurrentList(user.following)
    }

    return (
        <>
            <ul className="nav nav-pills mb-2">
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "posts" ? "active" : ""}`}
                          onClick={setPosts}>{user.posts.length} Posts</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "followers" ? "active" : ""}`}
                          onClick={setFollowers}>{user.followers.length} Followers</Link>
                </li>
                <li className={"list-group-item"}>
                    <Link className={`nav-link p-1 ${currentListType === "following" ? "active" : ""}`}
                          onClick={setFollowing}>{user.following.length} Following</Link>
                </li>
            </ul>
            <ContentList arr={currentList} editablePosts={editable}/>
        </>
    );
};
export default ProfileStats;