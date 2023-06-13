import apiClient from 'utils/apiClient'
import SalonsScreen from './SalonsScreen'

export default async function SalonsPage() {
  const [salons, featured] = await Promise.all([
    apiClient.GET('salons'),
    apiClient.GET('salons/featured', { cache: 'no-store' }),
  ])

  return (
    <main className="p-5 max-w-[90%] mx-auto">
      <h1 className="text-xl text-center mb-2 font-bold">Salons</h1>
      <SalonsScreen salons={salons} featured={featured} />
    </main>
  )
}
