import { db, Users, Customers, Salons, Employees, Admins, Owners } from 'drizzle'

const CACHE = {}

export default CACHE

export const buster = collection => busters[collection]()

const busters = {
  users: async () => {
    const users = await db.select().from(Users)
    CACHE.users = users.reduce(reducer('email'), {})
  },
  customers: async () => {
    const customers = await db.select().from(Customers)
    CACHE.customers = customers.reduce(reducer('email'), {})
  },
  employees: async () => {
    const employees = await db.select().from(Employees)
    CACHE.employees = employees
  },
  admins: async () => {
    const admins = await db.select().from(Admins)
    CACHE.admins = admins.reduce(reducer('email'), {})
  },
  owners: async () => {
    const owners = await db.select().from(Owners)
    CACHE.owners = owners.reduce(reducer('email'), {})
  },
  services: async () => {
    CACHE.services = await db.query.ServiceCategories.findMany({
      with: {
        services: true,
      },
    })
  },
  salons: async () => {
    const salons = await db.select().from(Salons)
    const mapper = s => ({ ...s, coords: [+s.latitude, +s.longitude] })
    CACHE.salons = salons.map(mapper)
    CACHE.salonsByName = CACHE.salons.reduce(reducer('name'), {})
  },
}

const initializeCache = async () => {
  Object.entries(busters).forEach(([, buster]) => buster())
}

initializeCache()

const reducer = key => (result, item) => {
  result[item[key]] = item
  return result
}
