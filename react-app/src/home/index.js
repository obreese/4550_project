import React from "react";
import NavigationSidebar from "../navigation";
import  "react-icons/bi/index";

const HomeComponent = () => {
    return (
        <div className="col-6">
            <input placeholder="Search Posts and Music"
                   className="form-control rounded-pill ps-3"/>
        </div>
    );
};
export default HomeComponent;
