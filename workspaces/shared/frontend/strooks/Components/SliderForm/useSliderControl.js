import { useEffect, useState, useRef } from 'react'

const useSliderControl = config => {
  const focusable = 'a,button,input,select'
  const { onSubmit, stepper, stepCounter, setError } = config

  const { formRef } = config
  const successRef = useRef()
  const errorRef = useRef()

  const [success, setSuccess] = useState(null)
  const [step, setStep] = stepper || useState(1)
  const [steps, setSteps] = stepCounter || useState(null)

  // focus fix
  useEffect(() => {
    const onKeyPress = ev => {
      if (ev.keyCode === 9) {
        const fieldset = formRef.current.children[step]
        const elements = fieldset.querySelectorAll(focusable)
        if (ev.target === elements[elements.length - 1]) {
          ev.preventDefault()
          elements[0].focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyPress)
    return () => document.removeEventListener('keydown', onKeyPress)
  })

  // no Enter to submit
  useEffect(() => {
    const { current: form } = formRef
    const handler = ev => {
      if (ev.code === 'Enter') {
        ev.preventDefault()
        ev.stopPropagation()
      }
    }

    if (form) {
      form.addEventListener('keydown', handler)
      form.addEventListener('keyup', handler)
      form.addEventListener('keypress', handler)
    }
    return () => {
      if (form) {
        form.removeEventListener('keydown', handler)
        form.removeEventListener('keyup', handler)
        form.removeEventListener('keypress', handler)
      }
    }
  }, [formRef.current])

  const onLocalSubmit = async () => {
    try {
      await onSubmit()
      if (successRef.current) {
        setSuccess(true)
        setStep(step => step + 1)
      }
    } catch (ex) {
      if (errorRef.current) {
        setStep(0)
        console.log('ex.message', ex.message)
        setError(ex.message)
      } else {
        throw ex
      }
    }
  }

  return {
    onLocalSubmit,
    steps,
    setSteps,
    step,
    setStep,
    success,
    setSuccess,
    successRef,
    errorRef,
  }
}

export default useSliderControl
