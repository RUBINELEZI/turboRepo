import apiClient from 'utils/apiClient'
import DataTable from 'strooks/Components/DataTable'

export default async function HomePage() {
  const prospects = await apiClient.GET('users/prospects')

  return (
    <main className="p-5 max-w-[90%] mx-auto">
      <h1 className="text-xl text-center mb-2 font-bold">Pending actions:</h1>
      <section>
        <h1 className="font-bold">Prospective Owners</h1>
        <DataTable data={prospects} />
      </section>
    </main>
  )
}
