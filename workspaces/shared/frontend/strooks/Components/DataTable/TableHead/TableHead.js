import React, { useMemo } from 'react'
import FilterHeadRow from './FilterHeadRow'
import PropTypes from 'prop-types'

const THeader = ({ columns, sorter, components, filterFn, data }) => {
  const TableHeader = components.TableHeader || 'thead'
  const TableRow = components.TableRow || 'tr'
  const TableHead = components.Th || 'th'

  const hasFilterHead = useMemo(() => filterFn && columns.some(c => 'filter' in c))

  return (
    <TableHeader>
      <TableRow>
        {columns &&
          columns.map(col => {
            const key = col.field || col
            let label = col.label || (typeof col === 'string' && col) || ''

            const sortKey = col.sortKey

            return sortKey ? (
              <TableHead
                key={key}
                data-sort={sortKey}
                style={{ cursor: sortKey && sorter ? 'pointer' : '' }}
                onClick={() => sortKey && sorter && sorter(sortKey)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span>{label}</span>
                  <span style={{ fontWeight: 'bold', scale: '2.5' }}>&#x21D5;</span>
                </div>
              </TableHead>
            ) : (
              <TableHead key={key} data-sort={sortKey}>
                {label}
              </TableHead>
            )
          })}
      </TableRow>
      {hasFilterHead && (
        <FilterHeadRow columns={columns} components={components} filterFn={filterFn} rows={data} />
      )}
    </TableHeader>
  )
}

THeader.propTypes = {
  columns: PropTypes.array.isRequired,
}

export default THeader
