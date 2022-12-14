import postsModel from "./posts-model.js";

export const creatPost = async (post) =>
    await postsModel.create(post)

export const deletePost = async (pid) =>
    await postsModel.deleteOne({_id: pid})

export const updatePost = async (pid, postUpdates) =>
    await postsModel.updateOne({_id: pid},
        {$set: postUpdates})

export const findPostById = async (pid) =>
    await postsModel.findById(pid)

export const findPostsByMusicId = async (music_id) =>
    await postsModel.find({'music.music_id': music_id})

export const findPostsByUserId = async (uid) =>
    await postsModel.find({'user_id': uid})
