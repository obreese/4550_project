import React, { useState } from "react";
import  "react-icons/bi/index";
import ContentList from "../list";
import { findAllMusic } from "../music/music-service"


const HomeComponent = ({contentIntial = [{
    "type": "post",
    "_id": 1234,
    "fname": "Me",
    "lname": "Smith",
    "username": "user",
    "time": 1669582106,
    "music": {
        "type": "music",
        "_id": 1236,
        "music_type": "song",
        "song": "my really long song name that is a song",
        "album": "my really long album name that is a album",
        "artist": "my really long artist name that is a artist",
        "image": "album-cover.jpeg",
        "music_id": "456"
    },
    "body": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
},{
    "type": "profile",
    "_id": 1235,
    "fname": "Me",
    "lname": "Smith",
    "username": "user"
},{
    "type": "music",
    "_id": 1236,
    "music_type": "song",
    "song": "my really long song name that is a song. again my really long song name that is a song",
    "album": "my really long album name that is a album. again my really long album name that is a album",
    "artist": "my really long artist name that is a artist. again my really long artist name that is a artist",
    "image": "album-cover.jpeg",
    "music_id": "456"
}]}) => {
    const [searchInput, setSearchInput] = useState("");
    const [content, setContent] = useState(contentIntial); // todo should change this is a proof of concept


    const searchInputChange = (newValue) => {
    setSearchInput(newValue.target.value);
    };

    const searchOnClick = async () => {
        const musicDataList = await findAllMusic(searchInput); // await and async should change when we use thunks

        console.log(musicDataList)
        const newItems = musicDataList.map(musicData => { // todo whats the difference between music id and id?
            return {
                type: "music",
                _id: musicData.id,
                music_type: musicData.type === 'track' ? "song" : musicData.type,
                song: musicData.name,
                album: musicData.album.name,
                artist: musicData.artists[0].name, // todo allow multiple
                image: musicData.album.images[0].url,
                music_id: musicData.id, 
            }
        });
        console.log(newItems)
        setContent(newItems);
    }

    return (
        <>
            <input placeholder="Search People and Music"
                   className="form-control rounded-pill ps-3"
                   type="search"
                   onChange={searchInputChange}/>
            <button onClick={searchOnClick}>test search</button>
            <ContentList arr={content}/>
            {/* <ul className="list-group">
                {
                    content && content.map((musicItem) =>
                        <li key={musicItem.name} className="list-group-item">
                            {musicItem.name}
                        </li>
                    )
                }
            </ul> */}
        </>
    );
};
export default HomeComponent;
