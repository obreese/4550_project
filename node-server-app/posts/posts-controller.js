import * as postsDao from './posts-dao.js'

const PostsController = (app) => {
    const createPost = async (req, res) => {
        const newPost = req.body;
        const actualPost = await postsDao.createPost(newPost)
        res.json(actualPost)
    }

    const updatePost = () => {}
    const deletePost = () => {}
    
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

    app.get('/posts/:pid', findPostById)
    app.post('/posts', createPost)
    app.put('/posts/:pid', updatePost)
    app.delete('/posts/:pid', deletePost)
}

export default PostsController