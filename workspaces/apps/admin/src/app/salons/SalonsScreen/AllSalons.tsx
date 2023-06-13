'use client'
import { useState } from 'react'
import DataTable from 'strooks/Components/DataTable'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useClient from 'hooks/useClient'

const AllSalons = ({ salons, featured }) => {
  const [updating, setUpdating] = useState(false)
  const client = useClient()

  const queryClient = useQueryClient()
  const onCheckboxChange = async ev => {
    setUpdating(true)
    const { id } = ev.target.dataset
    const res = await client.POST('salons/featured', { id })
    setTimeout(() => {
      queryClient.invalidateQueries(['featured-salons'])
      setUpdating(false)
    }, 200)
  }

  return (
    <div className="col-span-2">
      <h2 className="font-bold">All Salons:</h2>
      <DataTable
        data={salons}
        columns={[
          {
            field: 'name',
            label: 'Name',
          },
          { field: 'ownerEmail', label: 'Owner' },
          {
            field: 'id',
            label: 'Featured ?',
            format: id => {
              const defaultChecked = featured.find(f => f.id === id)
              return (
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  onChange={onCheckboxChange}
                  data-id={id}
                  disabled={updating}
                  defaultChecked={defaultChecked}
                />
              )
            },
          },
        ]}
      />
    </div>
  )
}

export default AllSalons
