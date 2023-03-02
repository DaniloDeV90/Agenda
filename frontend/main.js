
import './assets/css/style.css'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

 import Login from './modules/login'
 const login = new Login ('.cadastro')

 const cadastro = new Login ('.login-Cadastro') 
 login.init ()
 cadastro.init ()