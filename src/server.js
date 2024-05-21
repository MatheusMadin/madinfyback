import express from 'express'
import {PORT, HOST} from './config.js'
import usuarioRouter from './routers/usuarioRouter.js'
import artistaRouter from './routers/artistaRouter.js'
import musicaRouter from './routers/musicaRouter.js'
import logger from './middlewares/logger.js'
import cors from 'cors'


const app = express()

app.use(logger)
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))
app.use(express.json())

app.use('/usuario', usuarioRouter)
app.use('/artista', artistaRouter) 
app.use('/musica', musicaRouter)
app.get('/',(req, res) =>{
    res.json({message:"Bem vindo ao BACK do madinfy"})
  })


   app.get('/usuario',(req, res) =>{
   res.json({message:"OLA! PROD"})
  })
  app.get('/artista',(req, res) =>{
    res.json({message:"OLA! PROD"})
   })
   app.get('/musica',(req, res) =>{
    res.json({message:"OLA! PROD"})
   })

  app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
  })