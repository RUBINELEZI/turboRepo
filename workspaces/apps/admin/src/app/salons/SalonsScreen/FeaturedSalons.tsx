'use client'
import DataTable from 'strooks/Components/DataTable'

const FeaturedSalons = ({ featured }) => {
  return (
    <div className="col-span-1">
      <h2 className="font-bold">Featured Salons:</h2>
      <DataTable
        data={featured}
        columns={[
          {
            field: 'rank',
            label: '',
          },
          {
            field: 'name',
            label: 'Salon',
          },
        ]}
      />
    </div>
  )
}

export default FeaturedSalons
