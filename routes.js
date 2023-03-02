const express = require ('express')
const route = express.Router ()
const homeController = require ('./src/controllers/homecontroller')
const loginController = require ('./src/controllers/loginController')
const contatoController = require ('./src/controllers/contatoController')

const {loginRequired} = require ('./src/middlewares/middleware')
// function meuMiddleware (req,res,next) {

//     req.session = {Nome: 'Luiz', sobrenome: 'Miranda'}
//      console.log ('')                      
//      console.log ('Passei no seu middleware')
//      console.log ('')
//      next ()
// }

//Rotas da home 
route.get ('/', homeController.index)


// Rotas de login

route.get ('/login/index', loginController.index)

route.post ('/login/register', loginController.register)
 route.post ('/login/login', loginController.login)
 route.get ('/login/logout', loginController.logout)
route.get ('/contato/index', loginRequired, contatoController.index)
route.post ('/contato/register', loginRequired,contatoController.register)

//rotas de contato

route.get ('/contato/index/:id', loginRequired,contatoController.editIndex)
 
route.post ('/contato/edit/:id', loginRequired,contatoController.edit)
route.get ('/contato/delete/:id', loginRequired, contatoController.delete)
module.exports = route


// route.get ('/',  meuMiddleware,homeController.paginaInicial,function (req,res,next) {
//     console.log ()
//     console.log ('toaq')
//     console.log (` 'ultimomiddleware' Olha o que tem na req.session.nome ${req.session.Nome}`)
// })