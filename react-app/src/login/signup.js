import React,{ useState } from "react";
import "react-icons/bi/index";
import "./index.css"
import {Link} from "react-router-dom";
import "./signup.css"
import ProfileColorDropdown from "../profile/profile-colors";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router";
import {registerThunk} from "./../user/user-thunk";


const SignUpComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [currentColor, setCurrentColor] = useState('#3EA4D6');

    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()


    if(currentUser) {
        return (<Navigate to={'/profile'}/>)
    }

    const handleSignUp = () => {
        if (firstName === '' || lastName === '') {
            alert('name cannot be empty')
            return
        }
        else if (username === '') {
            alert('username cannot be empty')
            return
        }
        else if (email === '') {
            alert('email cannot be empty')
            return
        }
        else if (password === '' || password !== password2) {
            alert('invalid passwords')
            return
        }
        else {
            dispatch(registerThunk({username, password, firstName, lastName, email, currentColor}))
        }
    }

    return (
        <div className={"border rounded"}>
            <div className="row">
                <div className="col p-5">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="fname-input">First Name</label>
                            <input className="form-control rounded-pill ps-3" name="fname-input" type="text"
                                   onChange={(e) => setFirstName(e.target.value)} placeholder="John"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="lname-input">Last Name</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="lname-input" type="text"
                                   onChange={(e) => setLastName(e.target.value)} placeholder="Appleseed"></input>
                        </div>
                    </div>
                    <label htmlFor="email-input">Email</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="email-input" type="email"
                           onChange={(e) => setEmail(e.target.value)} placeholder="artist@music.com"></input>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="user-input">Username</label>
                            <input className="form-control rounded-pill ps-3 mb-3" name="user-input" type="text"
                                   onChange={(e) => setUsername(e.target.value)} placeholder="japple"></input>
                        </div>
                        <div className="col-3">
                            <label>Color</label>
                            <ProfileColorDropdown currentColor={currentColor} setCurrentColor={setCurrentColor}/>
                        </div>
                    </div>
                    <label htmlFor="pass-input">Password</label>
                    <input className="form-control rounded-pill ps-3 mb-3" name="pass-input" type="password"
                           onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
                    <label htmlFor="pass2-input">Confirm Password</label>
                    <input className="form-control rounded-pill ps-3" name="pass2-input" type="password"
                           onChange={(e) => setPassword2(e.target.value)} placeholder="password"></input>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 p-3">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <button onClick={handleSignUp} className="nav-link active">Sign Up</button>
                </li>
            </ul>
        </div>
    );
};
export default SignUpComponent;