import React, {useEffect} from "react";
import ProfileStats from "./profile-stats";
import {profile_json} from "../json_examples";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk} from "../user/user-thunk";

const PublicProfileComponent = ({ profileId }) => {
    const { profile } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findUserByIdThunk(profileId))
    }, [])

    if (profile)
    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row">
                        <div className="col">
                            <p className="fs-3">{profile.firstName + " " + profile.lastName}</p>
                        </div>
                        <div className="col"><button className="btn float-end btn-danger">Follow</button></div>
                    </div>

                    <p className="fs-5 text-secondary">{"@" + profile.username}</p>
                    <ProfileStats user={profile} editable={false}/>
                </div>
            </div>
        </div>
    );
};
export default PublicProfileComponent;