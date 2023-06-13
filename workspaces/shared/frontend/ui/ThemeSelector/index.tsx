'use client'
import { useState } from 'react'
import cx from 'classnames'
import useTheme from './useTheme'
// im

const ThemeSelector = () => {
  const [open, setOpen] = useState(false)
  const { themes, changeTheme, theme } = useTheme()

  return (
    <div onMouseLeave={() => setOpen(false)} className="absolute bottom-6 right-6">
      <div className={cx(!open && 'hidden')}>
        <ul className="menu menu-horizontal bg-base-200 rounded-box grid grid-cols-3">
          <li>
            <a onClick={() => changeTheme('')} className={cx(theme === '' && 'active')}>
              none
            </a>
          </li>
          {themes.map(t => (
            <li key={t}>
              <a onClick={() => changeTheme(t)} className={cx(theme === t && 'active')}>
                {t}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <btn className="cursor-pointer indicator absolute right-10" onClick={() => setOpen(o => !o)}>
        <span className="indicator-item badge badge-primary font-bold p-5">Theme</span>
      </btn>
    </div>
  )
}

export default ThemeSelector
