import Navbar from './Navbar'
import styles from './layout.module.scss'

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Navbar {...props} />
      <div className="min-h-screen pt-[--navbar-height]">{children}</div>
    </>
  )
}

export default Layout
