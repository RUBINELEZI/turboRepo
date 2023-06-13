import Link from 'next/link'
import styles from './link.module.scss'

const ALink = ({ href = '#', children, ...props }) => {
  return (
    <Link href={href} className={styles.link} {...props}>
      {children}
    </Link>
  )
}

export default ALink
