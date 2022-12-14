import * as postsDao from './posts-dao.js'

const PostsController = (app) => {
    const createPost = async (req, res) => {
        const newPost = req.body;
        const actualPost = await postsDao.createPost(newPost)
        res.json(actualPost)
    }

    const updatePost = () => {}
    const deletePost = () => {}
    
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
        const music_id = req.params.music_id
        let posts = await postsDao.findPostsByMusicId(music_id)          
        res.json(posts)
        return
    }

    const findPostsByUserId = async (req, res) => {
        const uid = req.params.uid
        let posts = await postsDao.findPostsByUserId(uid)          
        res.json(posts)
        return
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