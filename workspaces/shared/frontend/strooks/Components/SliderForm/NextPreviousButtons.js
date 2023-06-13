import React from 'react'
import styles from './styles'

const NextPreviousButtons = props => {
  const { steps, step, setStep, noNext, nextButtonText, nextCallback } = props

  return (
    <div className="next-prev" style={styles.controlsPrevNext}>
      <button
        style={{
          ...styles.controlsPrevNextButton,
          visibility: step > 1 && steps > step + 1 ? 'visible' : 'hidden',
        }}
        onClick={() => setStep(s => s - 1)}
      >
        Previous
      </button>
      {steps > step + 1 ? (
        <button
          style={{
            ...styles.controlsPrevNextButton,
            visibility: !noNext.has(step) ? 'visible' : 'hidden',
          }}
          onClick={() => setStep(s => s + 1)}
        >
          Next
        </button>
      ) : nextButtonText && nextCallback ? (
        <button
          style={{
            ...styles.controlsPrevNextButton,
          }}
          disabled={noNext.has(step)}
          onClick={() => nextCallback(setSteps)}
        >
          {nextButtonText}
        </button>
      ) : (
        <div style={{}}></div>
      )}
    </div>
  )
}

export default NextPreviousButtons
