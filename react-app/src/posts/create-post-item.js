import React from "react";
import MusicLinkItem from "../music/music-link-item";
import './creat-post-item.css'

const CreatePostItem = ({music}) => {

    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
    }

    return (
            <>
                <div className="col">
                    <div className="row">
                        <textarea onKeyDown={handleKeyDown} onChange={handleKeyDown} className="form-control shadow-none" placeholder="New post..."/>
                    </div>
                    <div className="row p-2">
                        <div className="col3">
                        <button className="btn active text-white">Post</button>
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