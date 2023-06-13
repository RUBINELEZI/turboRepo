import React from 'react'
import PropTypes from 'prop-types'

const TableTdCell = ({ value, idx, row, data, format, column, components }) => {
  value =
    typeof format === 'function' ? format(value, row, parseInt(idx, 10), data) : value?.toString()

  const Td = components.Td || 'td'

  return (
    <Td data-label={column.label} className={column.className}>
      {value}
      {value ? '' : String.fromCharCode(0x3164)}
    </Td>
  )
}

TableTdCell.propTypes = {
  value: PropTypes.any,
  row: PropTypes.object,
  data: PropTypes.array,
  format: PropTypes.func,
  column: PropTypes.object,
}

export default TableTdCell
