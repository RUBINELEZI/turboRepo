import { useRef } from 'react'
import getJSXTextContent from './getJsxTextContent'

const FilterHeadRow = ({ columns, components, filterFn, rows }) => {
  const startRows = useRef(rows)
  const TableRow = components.TableRow || 'tr'
  const TableHead = components.TableHead || 'th'
  const Input = components.Input || 'input'
  const Select = components.Select || 'select'

  const onSubmit = ev => {
    ev.preventDefault()
    console.log('submitting')
  }

  return (
    <TableRow>
      {columns.map(c => {
        if (!c.filter) return <Th key={c.field}></Th>
        if (typeof c.filter === 'string') {
          return (
            <TableHead key={c.field}>
              {c.filter && (
                <form onSubmit={onSubmit} onChange={filterFn}>
                  <Input name={c.filter} type="text" />
                </form>
              )}
            </TableHead>
          )
        }
        if (c.filter.component === 'select') {
          const options = startRows.current
            .reduce((acc, r, idx) => {
              const propPath = c.filter.key.split('.')
              const val = propPath.reduce((acc, prop) => (acc ? acc && acc[prop] : ''), r)
              if (!acc.some(ai => ai.value === val)) {
                acc.push({
                  value: val,
                  label: getJSXTextContent(c.format(val)),
                })
              }
              return acc
            }, [])
            .sort((a, b) => (a.label > b.label ? 1 : -1))
          return (
            <TableHead key={c.field}>
              <form onSubmit={onSubmit} onChange={filterFn}>
                <Select name={c.field}>
                  <option value="">...</option>
                  {options.map(option => {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    )
                  })}
                </Select>
              </form>
            </TableHead>
          )
        }
        return <TableHead></TableHead>
      })}
    </TableRow>
  )
}

export default FilterHeadRow
