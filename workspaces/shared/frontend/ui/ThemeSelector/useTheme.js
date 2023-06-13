import themes from 'tailwind-config/themes'
import { useState, useEffect } from 'react'

const useTheme = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(document.querySelector('html').dataset.theme)
  }, [])

  const changeTheme = themeName => {
    document.querySelector('html').dataset.theme = themeName
    setTheme(themeName)
  }

  return { themes, theme, changeTheme }
}

export default useTheme
