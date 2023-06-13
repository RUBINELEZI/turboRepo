import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import getCSSCustomPropIndex from './getCustomPropIndex'

const useStyleVars = (force = false) => {
  const [map, setMap] = useState(null)
  const [styleVars, setStyleVars] = useState({})

  const updateStyleVars = useCallback(() => {
    try {
      const rules = getCSSCustomPropIndex()
      const map = Object.keys(rules).reduce((result, k) => {
        result[k.replace(/^--/, '').replace(/-\w/g, ([, x]) => x.toUpperCase())] = k
        return result
      }, {})

      const styleVars = Object.keys(map).reduce((result, key) => {
        result[key] = rules[map[key]]
        return result
      }, {})

      setMap(map)
      setStyleVars(styleVars)
    } catch (ex) {
      console.log('forcing', ex.message)
      return setTimeout(updateStyleVars, 500)
    }
  })

  useEffect(() => {
    updateStyleVars()
  }, [])

  const colors = useMemo(
    () =>
      Object.entries(styleVars).reduce((result, entry) => {
        const [prop, val] = entry
        if (prop.startsWith('color')) result[prop] = val
        return result
      }, {}),
    [styleVars]
  )

  const setVar = (key, value) => {
    const cssName = map[key] || '--' + key.replace(/[A-Z]/g, char => '-' + char.toLowerCase())
    document.documentElement.style.setProperty(cssName, value)
    setStyleVars(vars => ({ ...vars, [key]: value }))
    if (!map[key]) {
      setMap({ ...map, [key]: cssName })
    }
  }

  return { styleVars, colors, setVar, propsMap: map, updateStyleVars }
}

export default useStyleVars
