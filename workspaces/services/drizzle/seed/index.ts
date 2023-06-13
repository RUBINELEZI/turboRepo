import bcrypt from 'bcryptjs'
import { db, client } from '../drizzle'
import adminsSeed from './admins.json'
import customersSeed from './customers.json'
import servicesSeed from './services.json'
import salonsSeed from './salons.json'
import employeesSeed from './employees.json'
import { Users, Admins, Customers, Employees } from '../schema'
import { ServiceCategories, Services, Salons } from '../schema'

const SALT_ROUNDS = 10

const seedUsers = async () => {
  const count = (await db.select().from(Users)).length
  if (count > 0) return

  const password = 'MySalon'
  const salt = await bcrypt.genSaltSync(SALT_ROUNDS)
  const hashedPassword = await bcrypt.hash(password, salt)

  for (let admin of adminsSeed) {
    const values = { email: admin.email, password: hashedPassword }
    const [user] = await db.insert(Users).values(values).returning()
    const [dbAdmin]: any = await db
      .insert(Admins)
      .values({ ...admin, active: true })
      .returning()
    console.log('DB:SEED', 'inserted admin', dbAdmin.id, dbAdmin.email)
  }

  for (let customer of customersSeed) {
    const values = { email: customer.email, password: hashedPassword }
    const [user] = await db.insert(Users).values(values).returning()
    const [dbCustomer]: any = await db
      .insert(Customers)
      .values({ ...customer, active: true })
      .returning()
    console.log('DB:SEED', 'inserted customer', dbCustomer.id, dbCustomer.email)
  }

  for (let employee of employeesSeed) {
    const values = { email: employee.email, password: hashedPassword }
    const [user]: any = await db.insert(Users).values(values).returning()
    const [dbEmployee]: any = await db
      .insert(Employees)
      .values({ ...employee, active: true })
      .returning()

    console.log('DB:SEED', `inserted employee ${dbEmployee.id}, ${user.id}, ${dbEmployee.email}`)
  }
}

const seedServices = async () => {
  console.log('DB:SEED', `seeding services`)
  const count = (await db.select().from(ServiceCategories)).length
  if (count > 0) return
  const categories = Object.keys(servicesSeed)
  for (let category of categories) {
    const [{ id: categoryId }] = await db.insert(ServiceCategories).values({ name: category }).returning()

    for (let service of servicesSeed[category]) {
      await db.insert(Services).values({ name: service, categoryId })
    }
  }
  const total = (await db.select().from(Services)).length
  console.log('DB:SEED', `inserted ${total} services`)
}

const seedSalons = async () => {
  console.log('DB:SEED', `seeding salons`)
  const count = (await db.select().from(Salons)).length
  if (count > 0) return
  await db.insert(Salons).values(salonsSeed)
  const total = (await db.select().from(Salons)).length
  console.log('DB:SEED', `inserted ${total} salons`)
}

const main = async () => {
  await seedUsers()
  await seedServices()
  await seedSalons()
  process.exit(0)
}

main()
