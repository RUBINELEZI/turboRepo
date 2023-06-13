import Link from 'next/link'
import cx from 'classnames'
import styles from './home.module.scss'

const HomeScreen = (props) => {
  const { handicapMode } = props
  // console.log(props)

  return (
    <div className={cx(styles.homeScreen, handicapMode && styles.handicapMode)}>
      <Link href="/buy-services">
        <button className={styles.largeButton}>
          <h1>Book Services</h1>
        </button>
      </Link>
      <Link href="/buy-products">
        <button className={styles.largeButton}>
          <h1>Buy Products</h1>
        </button>
      </Link>
      <Link href="/buy-quiet-time">
        <button className={styles.largeButton}>
          <h1>Quiet Time</h1>
        </button>
      </Link>
    </div>
  )
}

export default HomeScreen
