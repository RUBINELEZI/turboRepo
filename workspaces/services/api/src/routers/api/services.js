import { Router } from 'express'
import { db } from 'drizzle'
import CACHE from 'cache'

const servicesRouter = new Router()

servicesRouter.get('/', async (req, res) => {
  res.send(CACHE.services)
})

export default servicesRouter
