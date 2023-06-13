import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '../TableRow'

const TableBody = ({ data, columns, components }) => {
  return (
    <tbody>
      {data.map((row, idx) => {
        const key = row.id || row._id || JSON.stringify(row) || idx
        return (
          <TableRow
            key={key}
            index={idx}
            row={row}
            data={data}
            columns={columns}
            components={components}
          />
        )
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  controller: PropTypes.func,
}

export default TableBody
