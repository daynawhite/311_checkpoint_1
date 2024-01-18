const express = require('express')
const router = express.Router()

const usersController = require ('../controllers/users')

router.get('/', usersController.listUsers) 

router.get('/', usersController.showUser)

router.post('/', usersController.createUser)

router.put('/', usersController.updateUser)

router.delete('/', usersController.deleteUser)