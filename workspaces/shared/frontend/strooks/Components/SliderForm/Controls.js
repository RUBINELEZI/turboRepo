import React from 'react'
import NextPreviousButtons from './NextPreviousButtons'
import styles from './styles'

const Controls = props => {
  const { width, step, steps, setStep, onSubmit, submitText, noNext, isValid, controlsRef } = props
  const { nextButtonText, nextCallback, setSteps } = props

  return (
    <div
      className="controls absolute bottom"
      ref={controlsRef}
      style={{ ...styles.controls, width: width + 'px' }}
    >
      <NextPreviousButtons {...props} />

      <div className="submit">
        <button
          style={{ visibility: steps === step + 1 ? 'visible' : 'hidden' }}
          onClick={onSubmit}
          type="submit"
          disabled={!isValid}
        >
          {submitText}
        </button>
      </div>
    </div>
  )
}

export default Controls
