import {Link} from "react-router-dom";
import React from "react";
import {ProfileColors} from "./profile-colors";
const ColorPickerComponent = () => {
    return (
<ul className="nav nav-pills m-2">

    {ProfileColors.map(item => <li key={item} className={"list-group-item p-2"}>
        <div className={"color: red !important;"}>hey</div>
    </li>)}

</ul>
    )}

export default ColorPickerComponent