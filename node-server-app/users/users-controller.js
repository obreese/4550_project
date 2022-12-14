import * as userDao from './users-dao.js'

const UsersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await userDao.findAllUsers()
        res.json(users)
    }
    const createUser = async (req, res) => {
        const newUser = req.body;
        const actualUser = await userDao.createUser(newUser)
        res.json(actualUser)
    }
    const updateUser = async (req, res) => {

        const uid = req.params.uid;
        const user = req.body;
        const updatedUser = await userDao.updateUser(uid, user);
        req.session['currentUser'] = updatedUser;
        res.json(updatedUser)
        return
    }
    const deleteUser = async (req, res) => {
        const uid = req.params.uid;
        const user = await userDao.findUserById(uid)
        if (user) {
            const deletedUser = await userDao.deleteUser(uid)
            res.json(deletedUser)
            return
        }
        res.sendStatus(404)
    }

    const register = async (req, res) => {
        const user = req.body;
        const existingUser = await userDao
            .findUserByUsername(user.username)
        if(existingUser) {
            res.sendStatus(403)
            return
        }
        const currentUser = await userDao.createUser(user)
        req.session['currentUser'] = currentUser
        res.json(currentUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await userDao
            .findUserByCredentials(
                credentials.username, credentials.password)
        if(existingUser) {
            req.session['currentUser'] = existingUser
            res.json(existingUser)
            return
        }
        res.sendStatus(403)
    }

    const logout = (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    const profile = (req, res) => {
        if (req.session['currentUser']) {
            res.send(req.session['currentUser'])
        } else {
            res.sendStatus(403)
        }
    }

    const findUserById = async (req, res) => {
        const uid = req.params.uid
        const user = await userDao.findUserById(uid)
        if (user) {
            const document = {
                ...user._doc,
                type: 'profile_item'
            }
            res.json(document)
            return
        }
        
        res.sendStatus(404)
    }

    app.get('/users', findAllUsers)
    app.get('/users/:uid', findUserById)
    app.post('/users', createUser)
    app.put('/users/:uid', updateUser)
    app.delete('/users/:uid', deleteUser)

    app.post('/register', register)
    app.post('/login', login)
    app.post('/logout', logout)
    app.post('/profile', profile)
}

export default UsersController