import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    currentColor: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
    posts: {type: [String], required: true, default: []},
    followers: {type: [String], required: true, default: []},
    following: {type: [String], required: true, default: []},
}, {collection: 'users'})

export default usersSchema