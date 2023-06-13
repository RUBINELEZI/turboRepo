import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Children, cloneElement, useState } from 'react'
import { BiHandicap } from 'react-icons/bi'
import cx from 'classnames'
import logoImage from 'ui/images/logo.png'
import styles from './layout.module.scss'
import handicapLogo from '@/assets/handicap.svg'
import yellowLeaf from '@/assets/yellow-leaf.svg'
import Background from './Background'

const Layout = ({ children }) => {
  const [handicapMode, setHandicapMode] = useState(false)
  return (
    <>
      <Head>
        <title>Screen - My Salon</title>
      </Head>
      <main className={cx(styles.main, handicapMode && styles.handicapMode)}>
        <Background />
        {/* <div className={styles.logo}>
          <Link href="/">
            <Image src={logoImage} alt="mysalon logo" />
          </Link>
        </div>
        <div className={styles.mainGrid}>
          <div className={styles.spacer}></div>
          {Children.map(children, (child) =>
            cloneElement(child, { handicapMode })
          )}
        </div>
        <div
          onClick={() => setHandicapMode((mode) => !mode)}
          className={styles.handicapButton}
        >
          <Image src={handicapLogo} />
        </div> */}
      </main>
    </>
  )
}

export default Layout
