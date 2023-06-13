import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { db, client } from './drizzle'
import CONFIG from 'config'

const main = async () => {
  await migrate(db, { migrationsFolder: '.drizzle' })
  console.log('------- migrated --------')
  process.exit(0)
}

main()

console.log('migrating')
