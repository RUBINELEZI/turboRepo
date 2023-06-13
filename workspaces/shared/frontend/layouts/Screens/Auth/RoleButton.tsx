import cx from 'classnames'

const RoleButton = ({ active, label, onClick }) => {
  const className = cx(
    'px-3 py-1 rounded-md',
    active ? 'bg-gray-500 text-white' : 'bg-gray-100'
  )
  return (
    <div className={className}>
      <a onClick={onClick}>
        <span>{label}</span>
      </a>
    </div>
  )
}

export default RoleButton
