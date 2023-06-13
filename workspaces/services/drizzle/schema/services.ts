import { sql, relations } from 'drizzle-orm'
import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core'

export const ServiceCategories = pgTable('service_categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
})

export const Services = pgTable('services', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 64 }),
  categoryId: integer('category_id'),
})

export const ServicesCategoriesRelations = relations(Services, ({ one }) => ({
  category: one(ServiceCategories, {
    fields: [Services.categoryId],
    references: [ServiceCategories.id],
  }),
}))

export const CategoriesServicesRelations = relations(
  ServiceCategories,
  ({ many }) => ({
    services: many(Services),
  })
)
