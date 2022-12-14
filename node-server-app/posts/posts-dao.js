import postsModel from "./posts-model.js";

export const createPost = async (post) =>
    await postsModel.create(post)

export const deletePost = async (pid) =>
    await postsModel.deleteOne({_id: pid})

export const updatePost = async (pid, postUpdates) =>
    await postsModel.updateOne({_id: pid},
        {$set: postUpdates})
       
export const findAllPosts = async () =>
    await postsModel.find();

export const findPostById = async (pid) =>
    await postsModel.findById(pid)

export const findPostsByMusicId = async (music_id) =>
    await postsModel.find({'music._id': music_id})

export const findPostsByUserId = async (uid) =>
    await postsModel.find({'user_id': uid})
