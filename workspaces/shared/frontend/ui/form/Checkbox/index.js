import styles from './checkbox.module.scss'

const Checkbox = ({ label, name, ...props }) => {
  return (
    <label className={styles.checkbox}>
      <div className={styles.inputContainer}>
        <input
          name={name}
          aria-describedby={name}
          type="checkbox"
          className={styles.input}
          {...props}
        />
      </div>
      <div className={styles.label}>
        <span className="">{label}</span>
      </div>
    </label>
  )
}

export default Checkbox
