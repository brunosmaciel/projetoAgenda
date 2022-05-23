require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    console.log('Conectando a base de dados...')
    app.emit('ready')
})

const session = require('express-session') //Identificar computador do cliente (cookie)
const MongoStore = require('connect-mongo') // Para falar que as sessoes vao ser salvar no banco de dados
const flash = require('connect-flash') // Mensagens auto-destrutivas(sao salvas em sessoes)
const routes = require('./routes') // rotas
const path = require('path')
const helmet = require('helmet') // recomendacao do Express
const csrf = require('csurf') // csrfTokens para evitar post de sites externos
const {middlewareGlobal, checkCsrfError,csrfMiddleware} = require('./src/middlewares/middleware')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'public')))
// app.use(helmet())

const sessionOptions = session({
    secret: 'Banana',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*7,
        httpOnly:true
    }
})
app.use(sessionOptions)
app.use(flash())
app.set('views',path.resolve(__dirname,'src','views'))
app.set('view engine','ejs')

app.use(csrf())
app.use(middlewareGlobal)
app.use(csrfMiddleware)
app.use(checkCsrfError)
app.use(routes)


app.on('ready', () =>{
    app.listen(3000, ()=>{
        console.log('Executando...')
        console.log('Servidor rodando em: http://localhost:3000/')
    } )
})

