import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicLinkItem from "../music/music-link-item";
import './create-post-item.css'
import { createPost } from "./posts-service";
import { updateUserThunk } from '../user/user-thunk.js'

const CreatePostItem = ({music, updatePosts}) => {
    const dispatch = useDispatch()

    const [body, setBody] = useState("");
    const { profile } = useSelector((state) => state.user);

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        setBody(e.target.value)
    }

    const handlePost = async () => {
        const newPost = {
            type: 'post',
            fname: profile.firstName,
            lname: profile.lastName,
            username: profile.username,
            user_id: profile._id,
            music,
            body,
        }
        const createdPost = await createPost(newPost);
        const newUser = {posts: [...profile.posts, createdPost._id]};
        dispatch(updateUserThunk({newUserId: profile._id, newUser}));
        updatePosts(music._id);
    }


    return (
        <>
            <div className="col">
                <div className="row">
                    <textarea onKeyDown={handleKeyDown} onChange={handleKeyDown} className="form-control shadow-none"
                              placeholder="New post..."/>
                </div>
                <div className="row p-2">
                    <div className="col3">
                        <button className="btn active text-white" onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>
            <div
                className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-4 col-xxl-4 float-right d-inline-flex align-items-center">
                <MusicLinkItem music={music}/>
            </div>
        </>
    );
};
export default CreatePostItem;