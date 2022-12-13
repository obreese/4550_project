import mongoose from "mongoose";

const postsSchema = mongoose.Schema({
    type: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    username: {type: String, required: true},
    user_id: {type: Number, required: true},
    time: {type: Number, required: true},
    music: {type: Object, required: true},
    body: {type: String, required: true},
}, {collection: 'posts'})

export default postsSchema;