import Link from 'next/link'
import styles from './navbar.module.scss'

const MenuItem = ({ onClick, href, label }) => {
  return (
    <div className={styles.menuItem} onClick={onClick}>
      {label}
    </div>
  )
}

export default MenuItem
