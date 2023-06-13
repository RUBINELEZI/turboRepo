import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import styles from './navbar.module.scss'

const Navbar = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <Logo />
        <h1 className="text-xl font-bold">{title}</h1>
        <UserMenu />
      </div>
    </div>
  )
}

export default Navbar
