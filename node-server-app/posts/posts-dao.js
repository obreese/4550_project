import postsModel from "./posts-model.js";

export const creatPost = async (post) =>
    await postsModel.create(post)

export const deletePost = async (pid) =>
    await postsModel.deleteOne({_id: pid})

export const updatePost = async (pid, postUpdates) =>
    await postsModel.updateOne({_id: pid},
        {$set: postUpdates})

export const findPostById = (pid) =>
    postsModel.findById(pid)