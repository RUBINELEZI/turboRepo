import React from 'react'
import PropTypes from 'prop-types'
import TableTdCell from '../TableTdCell'
import RowControls from '../RowControls'

const TableRow = ({ row, index, columns, data, controller, components }) => {
  const onControlsClick = ev => {
    controller(ev, row)
  }

  const TableRow = components.TableRow || 'tr'
  const TableCell = components.TableCell || 'td'

  return (
    <TableRow>
      {columns.map((col, idx) => {
        // let value = typeof col === 'string' ? row[col] : row[col.field]

        const propPath = col.field && col.field.split('.')
        const value = propPath.reduce((acc, prop) => (acc ? acc && acc[prop] : ''), row)

        return (
          <TableTdCell
            key={idx}
            idx={index}
            value={value}
            column={col}
            row={row}
            data={data}
            format={col.format}
            components={components}
          />
        )
      })}
      {typeof controller === 'function' && (
        <TableCell>
          <RowControls onClick={onControlsClick} />
        </TableCell>
      )}
    </TableRow>
  )
}

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  controller: PropTypes.func,
}

export default TableRow
