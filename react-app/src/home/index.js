import React from "react";
import NavigationSidebar from "../navigation";
import  "react-icons/bi/index";
import ContentList from "../list"
import {musics_json, posts_json, profile_items_json} from "../json_examples";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

const HomeComponent = ({content = []}) => {
    let search = useLocation().pathname.split("/").indexOf("search") > -1
    let arr_e = musics_json.concat(profile_items_json)
    const navigate = useNavigate()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate({
                pathname: '/search',
                search: `?${createSearchParams({"search": event.target.value})}`,
            });
        }
    }

    return (
        <>
            <input placeholder="Search People and Music"
                   className="form-control rounded-pill ps-3"
            onKeyDown={handleKeyDown}/>
            {search ? <ContentList arr={arr_e}/> : <ContentList arr={posts_json}/>}
        </>
    );
};
export default HomeComponent;
