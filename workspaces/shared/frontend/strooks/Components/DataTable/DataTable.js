'use client'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'

const DataTable = ({ data, components = {}, columns, show, className = '', sorter, filterFn }) => {
  const [cols, setCols] = useState()
  const [rows, setRows] = useState()

  useEffect(() => {
    setRows(show ? data.slice(0, show) : data)
  }, [data, show])

  useEffect(() => {
    let cols = columns || []
    if (!columns) {
      cols = data && Object.keys(data[0]).map(k => ({ field: k, label: k }))
    } else if (typeof columns[0] === 'string') {
      cols = columns.map(c => ({ field: c, label: c }))
    }
    setCols(cols)
  }, [columns, data])

  if (!data || !cols) return null

  const TableComponent = components.Table || 'table'

  return (
    <div>
      <TableComponent>
        {cols && (
          <TableHead
            data={data}
            columns={cols}
            sorter={sorter}
            components={components}
            filterFn={filterFn}
          />
        )}
        {cols && rows && rows.length > 0 && (
          <TableBody data={rows} columns={cols} components={components} />
        )}
      </TableComponent>
    </div>
  )
}

// DataTable.propTypes = {
//   data: PropTypes.array,
//   columns: PropTypes.arrayOf(PropTypes.oneOf(PropTypes.object, PropTypes.string)),
//   show: PropTypes.number,
//   className: PropTypes.string,
//   controller: PropTypes.func,
// }

export default DataTable
