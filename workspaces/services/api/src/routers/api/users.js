import { Router } from 'express'
import { db, Users, Owners, Customers, Admins, Employees, eq } from 'drizzle'

const usersRouter = new Router()

const models = {
  owners: Owners,
  customers: Customers,
  admins: Admins,
  Employees: Employees,
}

usersRouter.get('/me', async (req, res) => {
  if (!req.user) return res.status(403).send('forbidden')
  res.send(req.user)
})

usersRouter.get('/prospects', async (req, res) => {
  const prospects = await db.select().from(Owners).where(eq(Owners.active, false))
  return res.send(prospects)
})

usersRouter.get('/:type', async (req, res) => {
  const { type } = req.params
  if (!models[type]) return res.status(401).send('BAD REQUEST')
  const model = models[type]
  const people = await db.select().from(model).orderBy(model.firstName)
  res.send(people)
})

usersRouter.get('/', async (req, res) => {
  const users = await db.select().from(Users)
  return res.send(users)
})

export default usersRouter
