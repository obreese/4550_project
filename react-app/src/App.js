import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router-dom";
import HomeComponent from "./home";
import LoginComponent from "./login/login";
import SignUpComponent from "./login/signup";
import NavigationSidebar from "./navigation";
import React from "react";
import PublicProfileComponent from "./profile/publicProfile";
import PrivateProfileComponent from "./profile/private-profile";

function App() {
    var location = useLocation().pathname.split("/")
    console.log(location)
    if (location.length > 1 && location[1] === "") {
        location = "home"
    } else if (location.length > 1 && location[1] === "myprofile") {
        location = "myprofile"
    } else {
        location = location.pop()
    }

    return (
        <div className="row">
            <NavigationSidebar active={location}/>
            <div className={"col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto"}>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="/home" element={<HomeComponent/>}/>
                    <Route path="/myprofile/*" element={<PrivateProfileComponent/>}/>
                    <Route path="/profile/*" element={<PublicProfileComponent/>}/>
                    <Route path="/login" element={<LoginComponent/>}/>
                    <Route path="/signup" element={<SignUpComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
