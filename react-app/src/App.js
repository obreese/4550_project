import "./App.css";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router-dom";
import HomeComponent from "./home";
import LoginComponent from "./login/login";
import SignUpComponent from "./login/signup";
import NavigationSidebar from "./navigation";
import React from "react";
import PublicProfileComponent from "./profile/public-profile";
import PrivateProfileComponent from "./profile/private-profile";
import LogoutComponent from "./login/logout";
import {timeConverter} from "./time";

function App() {
    let location = useLocation().pathname.split("/");
    if (location.length > 1 && location[1] === "") {
        location = "home"
    } else if (location.length > 1 && location[1] === "myprofile") {
        location = "myprofile"
    } else {
        location = location.pop()
    }
    timeConverter(1668974426)

    return (
        <div className="row">
            <NavigationSidebar active={location}/>
            <div className={"col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto"}>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/search/*" element={<HomeComponent/>}/>
                    <Route path="/myprofile/*" element={<PrivateProfileComponent/>}/>
                    <Route path="/profile/*" element={<PublicProfileComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/signup" element={<SignUpComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
