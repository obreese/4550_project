import * as postsDao from './posts-dao.js'

const PostsController = (app) => {
    const createPost = async (req, res) => {
        const newPost = req.body;
        const actualPost = await postsDao.createPost(newPost)
        res.json(actualPost)
    }

    const updatePost = async (req, res) => {
        const pid = req.params.pid;
        const post = req.body;
        const updatedPost = await postsDao.updatePost(pid, post);
        req.session['currentPost'] = updatedPost;
        res.json(updatePost)
        return
    }
    const deletePost = async (req, res) => {
        const pid = req.params.pid;
        const post = await postsDao.findPostById(pid)
        if (post) {
            const deletedPost = await postsDao.deletePost(pid)
            res.json(deletedPost)
            return
        }
        res.sendStatus(404)
    }
    
    const findAllPosts = async (req, res) => {
        let posts = await postsDao.findAllPosts()
    
        res.json(posts)
        return
    }

    const findPostById = async (req, res) => {
        const pid = req.params.pid
        let post = await postsDao.findPostById(pid)
        if (post) {
            const document = {
                ...post._doc,
                type: 'post'
            }
            res.json(document)
            return
        }
        res.sendStatus(404)
    }

    const findPostsByMusicId = async (req, res) => {
        try {
            const music_id = req.params.music_id
            let posts = await postsDao.findPostsByMusicId(music_id)
            res.json(posts)
            return
        } catch {
            res.sendStatus(404)
        }
    }

    const findPostsByUserId = async (req, res) => {
        try {
            const uid = req.params.uid
            let posts = await postsDao.findPostsByUserId(uid)
            res.json(posts)
            return
        } catch {
            res.sendStatus(404)
        }
    }

    app.get('/posts/:pid', findPostById)
    app.get('/posts', findAllPosts)
    app.get('/posts/byMusicId/:music_id', findPostsByMusicId)
    app.get('/posts/byUserId/:uid', findPostsByUserId)
    app.post('/posts', createPost)
    app.put('/posts/:pid', updatePost)
    app.delete('/posts/:pid', deletePost)
}

export default PostsController