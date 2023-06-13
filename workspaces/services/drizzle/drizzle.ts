import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import CONFIG from 'config'
export * from './schema'
export * from 'drizzle-orm'

const client = postgres(CONFIG.postgres)

const db: PostgresJsDatabase<typeof schema> = drizzle(client, { schema })

export { db, client }
