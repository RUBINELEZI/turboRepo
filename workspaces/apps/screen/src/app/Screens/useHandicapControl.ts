import { useState, useEffect } from 'react'

const useHandicapControl = () => {
  const [handicapMode, setHandicapMode] = useState(false)
  const [changing, setChanging] = useState(false)
  const toggleHandicapMode = () => {
    if (!changing) {
      setChanging(true)
      setTimeout(() => {
        setHandicapMode(mode => !mode)
        setChanging(false)
      }, 300)
    }
  }

  return { handicapMode, toggleHandicapMode }
}

export default useHandicapControl
