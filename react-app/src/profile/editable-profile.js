import React, {useEffect, useState} from "react";
import ProfileStats from "./profile-stats";
import ProfileColorDropdown from "./profile-colors";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserThunk, findUserByIdThunk, logoutThunk, updateUserThunk} from "../user/user-thunk";
import { findUserById } from "../user/user-service";
import { deletePost } from "../posts/posts-service";

const EditableProfileComponent = ({ profileId, myProfile}) => {

    const {profile, currentUser, loading} = useSelector((state) => state.user)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [currentColor, setCurrentColor] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(profileId))
    }, [profileId])


    const handleSaveButton = () => {
        const newUser = {username, firstName, lastName, email, currentColor}
        const newUserId = '' + profile._id
        if (newUser['username'] === "") newUser["username"] = profile.username
        if (newUser['firstName'] === "") newUser["firstName"] = profile.firstName
        if (newUser['lastName'] === "") newUser["lastName"] = profile.lastName
        if (newUser['email'] === "") newUser["email"] = profile.email
        if (newUser['currentColor'] === "") newUser["currentColor"] = profile.currentColor
        try {
            dispatch(updateUserThunk({newUserId, newUser}))
        } catch (e) {

        }
    }

    const handleDeleteButton = async () => {
        try {
            // dispatch(deleteUserThunk(profile._id))
            if (myProfile) {
                dispatch(logoutThunk())
            } else {
                const currentUserId = '' + currentUser._id
                const killCount = currentUser.killCount
                const newKillCount = {killCount}
                newKillCount.killCount += 1
                dispatch(updateUserThunk({newUserId: currentUserId, newUser: newKillCount}))
            }
            const profile_followers = await Promise.all(profile.followers.map((follower_id) => findUserById(follower_id)));
            const profile_following = await Promise.all(profile.following.map((following_id) => findUserById(following_id)));

            profile_followers.map((follower) => {
                const newFollowing = follower.following.filter((f) => f !== profileId);
                const newUser = { following: newFollowing };
                dispatch(updateUserThunk({newUserId: follower._id, newUser}));
                return follower;
            })

            profile_following.map((following) => {
                const newFollowers = following.followers.filter((f) => f !== profileId);
                const newUser = { followers: newFollowers };
                dispatch(updateUserThunk({newUserId: following._id, newUser}));
                return following;
            })

            await Promise.all(profile.posts.map((post_id) => deletePost(post_id)))

            dispatch(deleteUserThunk(profile._id));
        } catch (e) {

        }
    }
       return (loading || !profile ? 'loading' :
                <div className={"border rounded"}>
                    <div className="row">
                        <div className="col p-5">
                            <div className="row pb-5">
                                <div className="col p-5">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="fname-input">First Name</label>
                                            <input
                                                defaultValue={profile.firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="form-control rounded-pill ps-3" name="fname-input"
                                                type="text"/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname-input">Last Name</label>
                                            <input
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="form-control rounded-pill ps-3 mb-3" name="lname-input"
                                                type="text" defaultValue={profile.lastName}/>
                                        </div>
                                    </div>
                                    <label htmlFor="email-input">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                                        placeholder="artist@music.com" defaultValue={profile.email}/>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="user-input">Username</label>
                                            <input
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="form-control rounded-pill ps-3 mb-3" name="user-input"
                                                type="text"
                                                defaultValue={profile.username}></input>
                                        </div>
                                        <div className="col-3">
                                            <label>Color</label>
                                            <ProfileColorDropdown defaultColor={profile.currentColor}
                                                                  currentColor={currentColor}
                                                                  setCurrentColor={setCurrentColor}/>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-3">
                                            <button
                                                onClick={handleSaveButton}
                                                type="button" className={"btn active"}>Save
                                            </button>
                                        </div>
                                        <div className="col-5">
                                            <button
                                                onClick={handleDeleteButton}
                                                type="button" className={"btn btn-danger"}>Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProfileStats user={profile} editable={true}/>
                        </div>
                    </div>
                </div>
       )
        ;
};
export default EditableProfileComponent;