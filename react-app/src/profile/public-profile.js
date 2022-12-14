import React, {useEffect} from "react";
import ProfileStats from "./profile-stats";
import {profile_json} from "../json_examples";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, updateUserThunk} from "../user/user-thunk";

const PublicProfileComponent = ({ profileId }) => {
    const { currentUser, profile } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(profileId))
    }, [])

    const handleFollow = () => {
        console.log(currentUser.following)
        console.log(profile.followers)
        const newCurrentFollowing = [...currentUser.following, profileId]
        const newProfileFollowers = [...profile.followers, currentUser._id]
        console.log(newCurrentFollowing)
        console.log(newProfileFollowers)
        dispatch(updateUserThunk({newUserId: currentUser._id, newUser: {following: newCurrentFollowing}}))
        dispatch(updateUserThunk({newUserId: profile._id, newUser: {followers: newProfileFollowers}}))
    }

    if (profile)
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row">
                        <div className="col">
                            <p className="fs-3">{profile.firstName + " " + profile.lastName}</p>
                        </div>
                        <div
                            onClick={handleFollow}
                            className="col"><button className="btn float-end btn-danger">Follow</button></div>
                    </div>

                    <p className="fs-5 text-secondary">{"@" + profile.username}</p>
                    <ProfileStats user={profile} editable={false}/>
                </div>
            </div>
        </div>
    );
};
export default PublicProfileComponent;