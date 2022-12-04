import {FaMusic} from "react-icons/fa"
import {BiAlbum} from "react-icons/bi"
import {BiGroup} from "react-icons/bi"
import React from "react";

export function renderIcon(musicType) {
    switch (musicType) {
        case 'song':
            return <FaMusic size={30} className="img-fluid"/>
        case 'album':
            return <BiAlbum size={30} className="img-fluid"/>
        case 'artist':
            return <BiGroup size={30} className="img-fluid"/>
        default:
            return <></>
    }
}