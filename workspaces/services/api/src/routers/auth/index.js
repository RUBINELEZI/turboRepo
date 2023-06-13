import { Router } from 'express'
import crypto from 'node:crypto'
import bcrypt from 'bcryptjs'
import { Users, Customers, Owners, Employees, Admins } from 'drizzle'
import { db, eq } from 'drizzle'
import CACHE from 'cache'
import CONFIG from 'config'
const SALT_ROUNDS = 10

const authRouter = new Router()

const caches = { values: null }

authRouter.post('/login', async (req, res) => {
  const { email, password, origin } = req.body
  const user = CACHE.users[email]

  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) return res.send(null)

  // this is a somewhat expensive op so we only want to run it once
  // but we can't run it at startup as the CACHE is not immediately ready
  caches.values = caches.values || {
    web: CACHE.customers,
    admin: CACHE.admins,
    business: { ...CACHE.owners, ...CACHE.employees },
  }

  const app = Object.keys(CONFIG.apps).find(key => CONFIG.apps[key] === origin)

  const person = caches.values[app][email]

  res.send(person)
})

authRouter.post('/register', async (req, res) => {
  const { email, password, password2, role } = req.body
  const { firstName, lastName, gender, phone } = req.body
  // [TODO] validate email

  if (password !== password2) return res.status(401).send('BAD REQUEST')

  const collections = {
    customer: Customers,
    owner: Owners,
  }

  const collection = collections[role]

  const where = eq(email, Users.email)
  const dbUser = await db.query.Users.findFirst({ where })
  if (dbUser) return res.status(403).send('FORBIDDEN')
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  const hashedPassword = await bcrypt.hash(password, salt)
  try {
    const newPerson = await db.transaction(async tx => {
      const password = hashedPassword
      const confirmationCode = crypto.randomUUID().slice(0, 23) + Date.now()
      const values = { email, password, confirmationCode }
      const [user] = await tx.insert(Users).values(values).returning()
      const personValues = { email, firstName, lastName, gender, phone }
      const [person] = await tx.insert(collection).values(personValues).returning()
      return person
    })

    res.send(newPerson)
  } catch (ex) {
    console.log(ex)
    res.status(401).send(`BAD REQUEST: ${ex.message}`)
  }
})

export default authRouter
