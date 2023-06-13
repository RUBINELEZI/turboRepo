import { useState, useEffect, useRef } from 'react'

const useDataControl = (initialData, setData) => {
  const startData = useRef(initialData)
  const [setup, setSetup] = useState(false)
  const [filterIn, setFilterIn] = useState(new Set())
  const [filterOut, setFilterOut] = useState(null)
  const [filterFields, setFilterFields] = useState({})
  const [sortKey, setSort] = useState(null)
  const [sortOrder, setSortOrder] = useState(-1)

  const filterFn = ev => {
    const { name, value, nodeName } = ev.target
    setFilterFields(ffs => ({ ...filterFields, [name]: { value, nodeName } }))
  }

  useEffect(() => {
    if (initialData && initialData.length > 0 && !setup) {
      startData.current = initialData
      setSetup(true)
    }
  }, [initialData])

  useEffect(() => {
    if (startData.current) {
      let filtered = [...startData.current]
      Object.entries(filterFields).forEach(entry => {
        const [name, { value, nodeName }] = entry
        filtered = filtered.filter(r => {
          const propPath = name.split('.')
          const val = propPath.reduce((acc, prop) => (acc ? acc && acc[prop] : ''), r)
          if (!val) return true
          if (normalize(val).includes(normalize(value))) return true
        })
      })
      setData(filtered)
    }
  }, [filterFields])

  const setSearch = (query, fields) => {
    fields = Array.isArray(fields) ? fields : [fields]

    setData(data => {
      const searched = initialData.filter(item => {
        for (let field of fields) {
          if (normalize(item[field]).includes(normalize(query))) {
            return true
          }
        }
        return false
      })
      return searched
    })

    return false
  }

  useEffect(() => {
    if (!sortKey) return
    const propPath = sortKey.split('.')
    setData(data => {
      return [...data].sort((a, b) => {
        const valA = propPath.reduce((acc, prop) => (acc ? acc && acc[prop] : ''), a)
        const valB = propPath.reduce((acc, prop) => (acc ? acc && acc[prop] : ''), b)
        if (typeof valA === 'string' && typeof valB === 'string') {
          return valA.toLowerCase() > valB.toLowerCase() ? 1 * -sortOrder : -1 * -sortOrder
        }
        return valA > valB ? 1 * -sortOrder : -1 * -sortOrder
      })
    })
    setSortOrder(order => -order)
    setSort(null)
  }, [sortKey])

  useEffect(() => {
    if (!filterOut) {
      setData(startData.current)
    } else {
      let newData = Array.from(startData.current)
      for (let key of Object.keys(filterOut)) {
        const set = filterOut[key]
        newData = newData.filter(item => !set.has(item[key]))
      }
      setData(newData)
    }
  }, [filterOut])

  useEffect(() => {
    if (startData.current) {
      if (!filterIn) {
        setData(startData.current)
      } else {
        let newData = Array.from(startData.current)
        for (let key of Object.keys(filterIn)) {
          const set = filterIn[key]
          newData = newData.filter(item => set.has(item[key]))
        }
        setData(newData)
      }
    }
  }, [filterIn])

  return { setSort, setSearch, filterIn: setFilterIn, filterOut: setFilterOut, filterFn }
}

export default useDataControl

const normalize = str =>
  str
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
