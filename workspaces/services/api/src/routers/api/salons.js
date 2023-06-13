import { Router } from 'express'
import { db, sql, asc, FeaturedSalons } from 'drizzle'
import CACHE from 'cache'

const salonsRouter = new Router()

salonsRouter.get('/', async (req, res) => {
  res.send(CACHE.salons)
})

salonsRouter.get('/featured', async (req, res) => {
  const featuredSalons = await db.query.FeaturedSalons.findMany({
    with: { salon: true },
    orderBy: [asc(FeaturedSalons.rank)],
  })
  res.send(featuredSalons.map(f => ({ ...f.salon, rank: f.rank })))
})

salonsRouter.post('/featured', async (req, res) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).send('FORBIDDEN')
  }
  const { id } = req.body
  const featured = await db.select().from(FeaturedSalons).orderBy(FeaturedSalons.rank)
  const index = featured.findIndex(f => f.salonId === +id)
  if (index !== -1) {
    featured.splice(index, 1)
  } else {
    featured.push({ salonId: +id, rank: 999 })
  }

  const emptied = await db.execute(sql`DELETE FROM featured_salons;`)
  const inserted = await db
    .insert(FeaturedSalons)
    .values(featured.map((f, idx) => ({ ...f, rank: idx + 1 })))
  res.send({ ok: true })
})

export default salonsRouter
