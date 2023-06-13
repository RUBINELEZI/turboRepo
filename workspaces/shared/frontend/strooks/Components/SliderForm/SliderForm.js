import styles from './styles'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Stepper from './Stepper'
import Controls from './Controls'
import useSliderLayout from './useSliderLayout'
import useSliderControl from './useSliderControl'

const SliderForm = props => {
  const { children, onChange, formRef, submitText } = props
  const { moveTo, setMoveTo, noNext = new Set(), animationTime = 600 } = props
  const { noFreeNavigation, isValid = true, bottom = '1rem' } = props
  const { nextButtonText, nextCallback, setIsTransitioning } = props

  const stepperRef = useRef()
  const controlsRef = useRef()

  const setStepAnimating = step => {
    if (setIsTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => setIsTransitioning(false), animationTime)
    }
    setStep(step)
  }

  const sliderControl = useSliderControl(props)
  const { onLocalSubmit, errorRef, successRef } = sliderControl
  const { steps, setSteps, step, setStep } = sliderControl

  let layoutConfig = { controlsRef, stepperRef, animationTime, ...props, ...sliderControl }
  const sliderLayout = useSliderLayout(layoutConfig)
  const { setupFieldsets, layoutSetup, fsHeight, width, wholeHeight } = sliderLayout

  const marginLeft = width * -1 * (step - 1) - (errorRef.current ? width : 0) + 'px'
  const containerStyles = { ...styles.formContainer, height: `calc(${wholeHeight}px + ${bottom})` }

  return (
    <div className="slider-form relative" style={containerStyles}>
      <Stepper
        steps={steps}
        step={step}
        setStep={setStepAnimating}
        noFreeNavigation={noFreeNavigation}
        stepperRef={stepperRef}
      />
      <form
        onSubmit={ev => ev.preventDefault()}
        onChange={onChange}
        ref={formRef}
        style={{
          ...styles.form,
          marginLeft,
        }}
      >
        {React.Children.map(children, (element, idx) => {
          let ref
          if (element.props.name === 'success') {
            ref = successRef
          } else if (element.props.name === 'error') {
            ref = errorRef
          }

          return React.cloneElement(element, { ref, style: { width } })
        })}
        <div style={{ clear: 'both ' }}></div>
      </form>
      <Controls
        width={width}
        step={step}
        steps={steps}
        setStep={setStepAnimating}
        setSteps={setSteps}
        onSubmit={onLocalSubmit}
        submitText={submitText}
        noNext={noNext}
        noFreeNavigation={noFreeNavigation}
        isValid={isValid}
        controlsRef={controlsRef}
        nextButtonText={nextButtonText}
        nextCallback={nextCallback}
        setIsTransitioning={setIsTransitioning}
      />
    </div>
  )
}

export default SliderForm
