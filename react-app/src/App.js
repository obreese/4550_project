import "./App.css";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {useLocation} from "react-router-dom";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation";
import React from "react";

function App() {
    var location = useLocation().pathname.split("/").pop();
    if (location == "") location = "home";
    return (
        <div className="row">
            <NavigationSidebar active={location}/>
            <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="/home" element={<HomeComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
