import React, {useState} from "react";
import {Link} from "react-router-dom";
import ProfileStats from "./profile-stats";
import {editable_profile_json} from "../json_examples";
import ProfileColorDropdown from "./profile-colors";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../user/user-thunk";

const EditableProfileComponent = (/*{profile = editable_profile_json}*/) => {


    const {currentUser} = useSelector((state) => state.user)
    console.log(currentUser)
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const [username, setUsername] = useState(currentUser.username);
    const [currentColor, setCurrentColor] = useState(currentUser.currentColor);
    const dispatch = useDispatch()

    const handleSaveButton = () => {
        try {

            dispatch(profileThunk({username, firstName, lastName, email, currentColor}))
        } catch (e) {

        }
    }

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
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="form-control rounded-pill ps-3" name="fname-input"
                                           type="text" defaultValue={currentUser.firstName}/>
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
                                           placeholder={currentUser.username}></input>
                                </div>
                                <div className="col-3">
                                    <label>Color</label>
                                    <ProfileColorDropdown currentColor={currentColor} setCurrentColor={setCurrentColor}/>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-3">
                                    <button type="button" className={"btn active"}>Save</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className={"btn btn-warning"}>Request Admin</button>
                                </div>
                                <div className="col-5">
                                    <button type="button" className={"btn btn-danger"}>Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileStats profile={currentUser}/>
                </div>
            </div>
        </div>
    );
};
export default EditableProfileComponent;