import jwt from 'jsonwebtoken'
import { db, Customers, eq } from 'drizzle'
import CACHE from 'cache'

const { NEXTAUTH_SECRET } = process.env

export const userMiddleware = async (req, res, next) => {
  const [, token] = (req.headers.authorization || '').split(' ')
  if (!token) return next()
  try {
    const decoded = jwt.verify(token, NEXTAUTH_SECRET)
    const { email } = decoded
    if (CACHE.customers[email]) {
      req.user = CACHE.customers[email]
      req.user.role = 'customer'
    } else if (CACHE.employees[email]) {
      req.user = CACHE.employees[email]
      req.user.role = 'employee'
    } else if (CACHE.admins[email]) {
      req.user = CACHE.admins[email]
      req.user.role = 'admin'
    }

    return next()
  } catch (ex) {
    return next()
  }
}
