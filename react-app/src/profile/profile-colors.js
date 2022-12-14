import React from "react";
import {useSelector} from "react-redux";

const ProfileColors = [
    "#3EA4D6",
    "#30BEB8",
    "#B2C239",
    "#FECC41",
    "#F9A235",
    "#F76225",
    "#D23736",
    "#E56173",
    "#9D60CD"
]

const ProfileColorDropdown = ({defaultColor, currentColor, setCurrentColor}) => {

    return (
        <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                <div className="profile-color" style={{backgroundColor: currentColor === '' ? defaultColor : currentColor}}></div>
            </button>
            <ul className="dropdown-menu">
                {ProfileColors.map(color => <li key={color} onClick={() => setCurrentColor(color)}><a
                    className="dropdown-item">
                    <div className="profile-color" style={{backgroundColor: color}}></div>
                </a></li>)}
            </ul>
        </div>)
}

export default ProfileColorDropdown