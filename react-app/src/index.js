import React from "react";
import ReactDOM from "react-dom/client";
import $ from 'jquery';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css"
import "react-icons/bi"
import NavigationSidebar from "./navigation";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import {BrowserRouter} from "react-router-dom";
import * as bootstrap from 'bootstrap';
import "@popperjs/core";
import "popper.js/dist/popper.min"
import "popper.js/dist/popper"
import "popper.js/dist/popper-utils"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="container pt-4">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", function(){
    // Enable popovers everywhere
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(element){
        return new bootstrap.Popover(element);
    });
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
