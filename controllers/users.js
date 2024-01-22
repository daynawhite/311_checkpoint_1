const users = require ('../data/index')

const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    if (user) {
    res.status(200).json(user)
    } else 
    res.status(404).send('User not found')
}

const createUser = (req, res) => {
    const newUser = {
    "id": users.length + 1,
    ...req.body
    };
    users.push(newUser);
    res.json(users[users.length-1])
}

const updateUser = (req, res) => {
    const chosenUser = users.find(user => user.id == req.params.id);
    const userIndex = users.indexOf(chosenUser)
    const updatedUser = {...chosenUser, ...req.body}
    if (chosenUser) {
        users.splice(userIndex, 1, updatedUser);
        res.json(updatedUser)
    } else 
        res.status(400).send(`User id ${req.params.id} does not exist`)
}

const deleteUser = (req, res) => {
    const IndexOfUserToDelete = users.findIndex(user => user.id == req.params.id);
    if (IndexOfUserToDelete !== -1) {
        users.splice(IndexOfUserToDelete, 1);
        res.status(204).send('deleted')
    } else
        res.status(400).send(`User id ${req.params.id} does not exist`)
}

module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}