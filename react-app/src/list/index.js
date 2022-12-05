import React, {useEffect} from "react";
import PostItem from "../posts/post-item";
import MusicItem from "../music/music-item";
import ProfileItem from "../profile/profile-item"
import EditPostItem from "../posts/edit-post-item";

const ContentList = ({
                      arr = [],
                  editablePosts = false}) => {
    const render = (listItem) => {
        switch(listItem.type) {
            case 'post':

                return editablePosts ? <EditPostItem key={listItem._id} post={listItem}/> :
                    <PostItem key={listItem._id} post={listItem}/>
            case 'profile_item':
                return <ProfileItem key={listItem._id} profile={listItem}/>
            case 'music':
                return <MusicItem key={listItem._id} music={listItem}/>
            default:
                return <></>
        }
    }
    return(

        <ul className="pt-3 list-group">
            {arr.map(item => render(item))}
        </ul>
    );
};
export default ContentList;