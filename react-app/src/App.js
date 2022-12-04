import "./App.css";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router-dom";
import HomeComponent from "./home";
import LoginComponent from "./login/login";
import SignUpComponent from "./login/signup";
import NavigationSidebar from "./navigation";
import React from "react";
import ProfileComponent from "./profile/profile";
import LogoutComponent from "./login/logout";
import MusicDetailedComponent from "./music/music-detailed"

function App() {
    let location = useLocation().pathname.split("/");
    if (location.length > 1 && location[1] === "") {
        location = "home"
    } else if ((location.length === 3 && location[1] === 'profile' && (location[2] === 'followers' || location[2] === 'following' || location[2] === ''))) {
        location = "profile"
    } else {
        location = location.pop()
    }
    return (
        <div className="row">
            <NavigationSidebar active={location} loggedIn={false}/>
            <div className={"col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto"}>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/search/*" element={<HomeComponent/>}/>
                    <Route path="/details/*" element={<MusicDetailedComponent/>}/>
                    <Route path="/profile/*" element={<ProfileComponent loggedIn={false}/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/register" element={<SignUpComponent/>}/>
                    <Route path="/logout" element={<LogoutComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
