const users = require ('../data/index')

const listUsers = (req, res) => {
    res.json(users)
}

const showUser = (req, res) => {
    const user = users.find(user => user.id == req.params.id);
    if (user) {
    res.status(200).json(contact)
    } else 
    res.status(404).send('User not found')
}

const createUser = (req, res) => {
    const newUser = {
    "id": users.length + 1,
    "name": "Brandie Smith",
  "username": "brsmith",
  "email": "brsmith@june.biz",
  "address": {
    "street": "Roger Ave",
    "suite": "Apt. 294",
    "city": "Austin",
    "zipcode": "78758",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-786-244-8273 x2095",
  "website": "brandie.org",
  "company": {
    "name": "Smith-Crona LLC",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
    };
    users.push(newUser);
    res.json(users[users.length-1])
}

const updateUser = (req, res) => {
    const chosenUser = users.find(user => user.id == req.params.id);
    if (chosenUser) {
        chosenUser.username = 'updatedUsername';
        res.json(chosenUser)
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