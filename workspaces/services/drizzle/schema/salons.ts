import { sql, relations } from 'drizzle-orm'
import { pgTable, serial, varchar, text, smallint } from 'drizzle-orm/pg-core'
import { integer, numeric, decimal } from 'drizzle-orm/pg-core'

export const Salons = pgTable('salons', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  description: text('description'),
  coverImage: varchar('cover_image', { length: 256 }),
  ownerEmail: varchar('owner_email', { length: 254 }),
  latitude: numeric('latitude', { precision: 100, scale: 15 }),
  longitude: numeric('longitude', { precision: 100, scale: 15 }),
})

export const FeaturedSalons = pgTable('featured_salons', {
  salonId: integer('salon_id').primaryKey(),
  rank: smallint('rank'),
})

export const FeaturedSalonsRelations = relations(FeaturedSalons, ({ one }) => ({
  salon: one(Salons, {
    fields: [FeaturedSalons.salonId],
    references: [Salons.id],
  }),
}))
