import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicLinkItem from "../music/music-link-item";
import './create-post-item.css'
import {useEffect} from 'react'

const EditPostItem = ({post}) => {
    const dispatch = useDispatch()

    const [body, setBody] = useState("");
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        updateTextArea()
    });

    const updateTextArea = () => {
        document.getElementById(post._id).style.height = 'auto'
        document.getElementById(post._id).style.height = `${document.getElementById(post._id).scrollHeight}px`
    }
    window.addEventListener('resize', updateTextArea)

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <textarea onKeyDown={updateTextArea} onChange={updateTextArea}
                                  className="form-control shadow-none textt"
                                  id={post._id}
                                  defaultValue={post.body}/>
                    </div>
                    <div className="row p-2">
                        <div className="col">
                            <button className="btn active text-white">Save</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">Delete</button>
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