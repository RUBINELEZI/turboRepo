import React from 'react'
import ReactNumberFormat from 'react-number-format'

const NumberFormat = props => {
  const { dollar, percent, prefix, suffix } = props
  const { decimalScale = 2, fixedDecimalScale = true } = props
  const { display: displayType = 'text', thousandSeparator = ',' } = props
  const { name, value, onChange } = props
  const { className, placeholder } = props

  const onLocalChange = ({ floatValue }) => {
    if (typeof onChange === 'function') {
      onChange({ target: { name, value: floatValue, type: 'number' } })
    }
  }

  return (
    <ReactNumberFormat
      onValueChange={onLocalChange}
      prefix={prefix ? prefix : dollar && !percent ? '$' : ''}
      suffix={suffix ? suffix : percent && !dollar ? '%' : ''}
      decimalScale={decimalScale}
      fixedDecimalScale={!!decimalScale}
      displayType={displayType}
      thousandSeparator={thousandSeparator}
      value={value}
      className={className}
      placeholder={placeholder}
    />
  )
}

export default NumberFormat
