import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { userMiddleware } from './middlewares'
import { apiRouter, authRouter, extendaRouter, emailerRouter } from './routers'

const { PORT } = process.env

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(userMiddleware)

app.use('/auth', authRouter)
app.use('/api', apiRouter)
app.use('/pos', extendaRouter)
app.use('/emailer', emailerRouter)

app.use('/', (req, res) => res.send({ ok: true }))

app.listen(PORT, () => console.log('API service listening on port', PORT))

process.on('uncaughtException', function (err) {
  console.error('--------------------- !!!!!!!!! ---------------------')
  console.error('Caught exception: ' + err)
  console.error('--------------------- !!!!!!!!! ---------------------')
})
