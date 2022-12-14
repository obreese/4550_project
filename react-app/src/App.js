import "./App.css";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomeComponent from "./home";
import SearchComponent from "./search";
import LoginComponent from "./login/login";
import SignUpComponent from "./login/signup";
import NavigationSidebar from "./navigation";
import React from "react";
import ProfileComponent from "./profile/profile";
import LogoutComponent from "./login/logout";
import MusicDetailedComponent from "./music/music-detailed"
import ProtectedRoute from "./user/protected-route";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user-reducer"
import searchResultsReducer from "./music/search-results-reducer";
import {Provider} from "react-redux";
import CurrentUser from "./user/current-user";

const store = configureStore({
    reducer: {
        user: userReducer,
        searchResults: searchResultsReducer,
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <div className="row">
                            <NavigationSidebar/>
                            <div className={"col-10 col-xs-10 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6 mx-auto"}>
                                <Routes>
                                    <Route path="/" element={<HomeComponent/>}/>
                                    <Route path="/home" element={<HomeComponent/>}/>
                                    <Route path="/search/*" element={<SearchComponent/>}/>
                                    <Route path="/details/*" element={<MusicDetailedComponent/>}/>
                                    <Route path="/profile" element={
                                        <ProtectedRoute>
                                        <ProfileComponent myProfile={true}/>
                                        </ProtectedRoute>
                                    }/>
                                    <Route path="/profile/:profile_id" element={ <ProfileComponent myProfile={false}/> }/>
                                    <Route path="/login" element={<LoginComponent/>}/>
                                    <Route path="/register" element={<SignUpComponent/>}/>
                                    <Route path="/logout" element={<LogoutComponent/>}/>
                                </Routes>
                            </div>
                        </div>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
