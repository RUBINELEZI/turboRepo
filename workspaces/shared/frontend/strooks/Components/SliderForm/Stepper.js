import React, { useState, useEffect } from 'react'
import styles from './styles'

const Stepper = ({ steps, step, setStep, noFreeNavigation, stepperRef }) => {
  const [cursor, setCursor] = useState('pointer')

  useEffect(() => {
    setCursor(noFreeNavigation ? 'auto' : 'pointer')
  }, [noFreeNavigation])

  return (
    <div ref={stepperRef} style={styles.stepper} className="stepper">
      {new Array(steps).fill(null).map((_, idx) => (
        <div
          key={idx + 1}
          onClick={() => !noFreeNavigation && setStep(idx + 1)}
          style={{
            ...styles.stepperStep,
            width: `${100 / steps}%`,
            cursor,
          }}
          className={`step ${step === idx + 1 ? 'active' : ''}`}
        ></div>
      ))}
    </div>
  )
}

export default Stepper
