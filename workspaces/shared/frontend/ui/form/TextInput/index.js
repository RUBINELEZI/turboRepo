import styles from './textinput.module.scss'

const TextInput = ({ label, name, type = 'text', className, ...props }) => {
  return (
    <label className={styles.container}>
      <span className={styles.label}>{label}</span>
      <input {...props} type={type} name={name} className={styles.input} />
    </label>
  )
}

export default TextInput
