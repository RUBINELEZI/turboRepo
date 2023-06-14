import { Router } from 'express'
import usersRouter from './users'
import servicesRouter from './services'
import salonsRouter from './salons'
import employeesRouter from './employees'
import mocksRouter from './mocks'

const apiRouter = new Router()

apiRouter.use('/users', usersRouter)
apiRouter.use('/services', servicesRouter)
apiRouter.use('/salons', salonsRouter)
apiRouter.use('/employees', employeesRouter)
apiRouter.use('/mocks', mocksRouter)

export default apiRouter
