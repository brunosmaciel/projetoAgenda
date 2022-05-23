const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController.js')
const contatoController = require('./src/controllers/contatoController.js')
const {loginRequired,teste} = require('./src/middlewares/middleware')

// Rotas de Home
route.get('/', homeController.index)

// Rotas de Login

route.get('/login/index', loginController.index)
route.post('/login/register',loginController.register)
route.post('/login/login',loginController.login)
route.get('/login/logout',loginController.logout)

//rotas de contato

route.get('/contato/index',loginRequired,contatoController.index)
route.post('/contato/register',loginRequired,contatoController.register)
route.get('/contato/index/:id',loginRequired,contatoController.editIndex)
route.post('/contato/edit/:id',loginRequired,contatoController.edit)
route.get('/contato/delete/:id',loginRequired,contatoController.delete)





module.exports = route