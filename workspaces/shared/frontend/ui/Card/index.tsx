import styles from './card.module.scss'

const Card = ({ title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <h1 className={styles.title}>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Card
