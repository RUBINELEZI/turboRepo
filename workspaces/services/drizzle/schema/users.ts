import { sql, relations } from 'drizzle-orm'
import { boolean, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'
import { integer, varchar, index } from 'drizzle-orm/pg-core'

export const Users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 254 }),
    password: varchar('password', { length: 60 }),
    createdAt: timestamp('created_at', { mode: 'string' }).defaultNow(),
    confirmed: boolean('confirmed').default(false),
    confirmationCode: varchar('confirmation_code', { length: 36 }),
  },
  table => ({ emaildx: index('user_email_idx').on(table.email) })
)

const PersonBaseSchema = {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 254 }),
  active: boolean('active').default(false),
  firstName: varchar('first_name', { length: 32 }),
  lastName: varchar('last_name', { length: 32 }),
  gender: varchar('gender', { length: 1 }),
  phone: varchar('phone', { length: 32 }),
}

export const Customers = pgTable(
  'customers',
  {
    ...PersonBaseSchema,
  },
  table => ({ emaildx: index('customer_email_idx').on(table.email) })
)

export const Employees = pgTable(
  'employees',
  {
    ...PersonBaseSchema,
    salonId: integer('salon_id'),
  },
  table => ({ emaildx: index('employee_email_idx').on(table.email) })
)

export const Owners = pgTable(
  'owners',
  {
    ...PersonBaseSchema,
  },
  table => ({ emaildx: index('owner_email_idx').on(table.email) })
)

export const Admins = pgTable(
  'admins',
  {
    ...PersonBaseSchema,
  },
  table => ({ emaildx: index('admin_email_idx').on(table.email) })
)
