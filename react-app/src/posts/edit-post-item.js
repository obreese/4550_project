import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicLinkItem from "../music/music-link-item";
import './create-post-item.css'
import {useEffect} from 'react'
import { deletePost, updatePost } from "./posts-service";
import { updateUserThunk } from '../user/user-thunk.js'


const EditPostItem = ({post}) => {
    const dispatch = useDispatch()

    const [body, setBody] = useState("");
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        updateTextArea()
    });

    const updateTextArea = (e) => {
        document.getElementById(post._id).style.height = 'auto'
        document.getElementById(post._id).style.height = `${document.getElementById(post._id).scrollHeight}px`

        if (e) {
            setBody(e.target.value);
        }
    }
    window.addEventListener('resize', updateTextArea)

    const handleSave = async () => {
        const newPost = { body }
        await updatePost({newPostId: post._id, newPost});
    }

    const handleDelete = async () => {
        await deletePost(post._id);
        const newUser = {posts: currentUser.posts.filter((p) => p !== post._id)};
        dispatch(updateUserThunk({newUserId: currentUser._id, newUser}));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <textarea onKeyDown={updateTextArea} onChange={updateTextArea}
                                  className="form-control shadow-none text"
                                  id={post._id}
                                  defaultValue={post.body}/>
                    </div>
                    <div className="row p-2">
                        <div className="col">
                            <button className="btn active text-white" onClick={handleSave}>Save</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>

                </div>
                <div
                    className="col-5 col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-4 col-xxl-4 float-right d-inline-flex align-items-center">
                    <MusicLinkItem music={post.music}/>
                </div>
            </div>
        </li>
    );
};
export default EditPostItem;