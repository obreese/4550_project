import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ProfileStats from "./profile-stats";
import {editable_profile_json} from "../json_examples";
import ProfileColorDropdown from "./profile-colors";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserThunk, updateUserThunk} from "../user/user-thunk";

const EditableProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.user)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState(currentUser.username);
    const [currentColor, setCurrentColor] = useState('');
    const dispatch = useDispatch()



    const handleSaveButton = () => {
        const newUser = {username, firstName, lastName, email, currentColor}
        const newUserId = '' + currentUser._id
        if (newUser['username'] == "") newUser["username"] = currentUser.username
        if (newUser['firstName'] == "") newUser["firstName"] = currentUser.firstName
        if (newUser['lastName'] == "") newUser["lastName"] = currentUser.lastName
        if (newUser['email'] == "") newUser["email"] = currentUser.email
        if (newUser['currentColor'] == "") newUser["currentColor"] = currentUser.currentColor
        try {
            dispatch(updateUserThunk({newUserId, newUser}))
        } catch (e) {

        }
    }

    const handleDeleteButton = () => {
        try {
            dispatch(deleteUserThunk(currentUser._id))
        } catch (e) {

        }
    }



    const {isAdmin} = useSelector((state) => state.user)

    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row pb-5">
                        <div className="col p-5">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="fname-input">First Name</label>
                                    <input
                                        defaultValue={currentUser.firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="form-control rounded-pill ps-3" name="fname-input"
                                           type="text" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lname-input">Last Name</label>
                                    <input
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="form-control rounded-pill ps-3 mb-3" name="lname-input"
                                           type="text" defaultValue={currentUser.lastName}/>
                                </div>
                            </div>
                            <label htmlFor="email-input">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                                   placeholder="artist@music.com" defaultValue={currentUser.email}/>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="user-input">Username</label>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control rounded-pill ps-3 mb-3" name="user-input" type="text"
                                           defaultValue={currentUser.username}></input>
                                </div>
                                <div className="col-3">
                                    <label>Color</label>
                                    <ProfileColorDropdown currentColor={currentColor} setCurrentColor={setCurrentColor}/>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-3">
                                    <button
                                        onClick={handleSaveButton}
                                        type="button" className={"btn active"}>Save</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className={"btn btn-warning"}>Request Admin</button>
                                </div>
                                <div className="col-5">
                                    <button
                                        onClick={handleDeleteButton}
                                        type="button" className={"btn btn-danger"}>Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileStats user={currentUser} editable={true}/>
                </div>
            </div>
        </div>
    );
};
export default EditableProfileComponent;