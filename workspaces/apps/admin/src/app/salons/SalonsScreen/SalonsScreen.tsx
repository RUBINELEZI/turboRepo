'use client'
import { useQuery } from '@tanstack/react-query'
import useClient from 'hooks/useClient'

import AllSalons from './AllSalons'
import FeaturedSalons from './FeaturedSalons'

const SalonsScreen = ({ salons, featured }) => {
  const client = useClient()
  const { data: featuredSalons } = useQuery(
    ['featured-salons'],
    () => client.GET('/salons/featured'),
    { initialData: featured }
  )

  return (
    <section className="grid grid-cols-3 gap-8">
      <AllSalons salons={salons} featured={featuredSalons} />
      <FeaturedSalons featured={featuredSalons} />
    </section>
  )
}

export default SalonsScreen
