import React from "react";
import NavigationSidebar from "../navigation";
import  "react-icons/bi/index";
import PostList from "../posts/post-list"

const HomeComponent = () => {
    return (
        <>
            <input placeholder="Search People and Music"
                   className="form-control rounded-pill ps-3"/>
            <PostList/>
        </>
    );
};
export default HomeComponent;
