require ('dotenv').config ()
const express = require ('express')
const app =  express ()
const mongoose = require ('mongoose')



mongoose.set("strictQuery", false);
mongoose.connect (process.env.CONNECTIONSSTRING)
.then ( () => {
    app.emit ('pronto')
})
.catch (e => console.log ("erro" + e))

const session = require ('express-session')
const MongoStore =  require ('connect-mongo')
const flash = require ('connect-flash')
let path = require ('path')
const helmet = require ('helmet')
const csurf = require ('csurf')
const routes = require ('./routes'); 

const {meuMiddleware, checkCsrfError, csrMiddleware} = require ('./src/middlewares/middleware')

app.use (helmet())
app.use (express.urlencoded ({extended:true }))
app.use (express.json())
app.use (express.static(path.resolve (__dirname, 'public')) )



const sessionOptios = session ({
    secret: 'jzxhczxkcjhzxjkhckzxhjhxckjzxhcj',
    store: MongoStore.create ({mongoUrl: process.env.CONNECTIONSSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use (sessionOptios)
app.use (flash ())

app.set ('views', path.resolve (__dirname, 'src', 'views'))
app.use (csurf())
app.set ('view engine', 'ejs')
app.use (meuMiddleware)
app.use (checkCsrfError)
app.use (csrMiddleware)
app.use (routes)

app.on ('pronto', () => {
app.listen (3000, () => {
    console.log ('Acessar http://localhost:3000')
    console.log ('Servidor executando')
}) 
})



