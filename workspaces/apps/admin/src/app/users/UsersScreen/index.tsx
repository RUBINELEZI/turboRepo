'use client'
import { DataTable } from 'strooks'
import { cn } from 'utils'
import * as tableComponents from 'shad/base/table'

export default function ({ users }) {
  return (
    <div className="w-[80%] mx-auto">
      <DataTable
        data={users}
        components={tableComponents}
        columns={[
          {
            field: 'active',
            format: (val, row) => (
              <div className={cn('w-3 h-3 rounded-full', val ? 'bg-green-500' : 'bg-red-500')} />
            ),
          },
          { field: 'id', label: 'ID' },
          { field: 'email', label: 'Email' },
          {
            field: 'firstName',
            label: 'Name',
            format: (first, user) => <div>{`${first} ${user.lastName}`}</div>,
          },
          { field: 'gender' },
          { field: 'phone' },
        ]}
      />
    </div>
  )
}
