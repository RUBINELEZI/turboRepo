import { Router } from 'express'
import CACHE from 'cache'

const employeesRouter = new Router()

employeesRouter.get('/', async (req, res) => {
  const { salon: salonName } = req.query
  const salon = CACHE.salonsByName[salonName]
  const employees = CACHE.employees.filter(e => e.salonId === salon.id)
  res.send(employees)
})

export default employeesRouter
