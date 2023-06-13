import { useState, useEffect, useRef, useCallback } from 'react'

const useSliderLayout = config => {
  const { formRef, controlsRef, stepperRef, errorRef, successRef } = config
  const { moveTo, setMoveTo, setStep, setSteps, steps, animationTime } = config
  const { updating, setUpdating, fieldsetSetup } = config

  const setupDone = useRef(false)

  const [fsHeight, setFsHeight] = useState(0)
  const [width, setWidth] = useState(null)
  const [wholeHeight, setWholeHeight] = useState(0)

  const wholeHeightRef = useRef(0)

  const initialSetup = useCallback(() => {
    let totalSteps = formRef.current.children.length
    if (errorRef.current) totalSteps--
    if (successRef.current) totalSteps--
    setSteps(totalSteps)
    setWidth(formRef.current.children[0].offsetWidth)

    if (!wholeHeightRef.current) {
      const fieldsetHeight = Array.from(formRef.current.children).reduce(
        (max, fs) => (fs.offsetHeight > max ? fs.offsetHeight : max),
        0
      )
      setFsHeight(fieldsetHeight)
      const { current: controls } = controlsRef
      const { current: stepper } = stepperRef
      wholeHeightRef.current = fieldsetHeight + controls.offsetHeight + stepper.offsetHeight
      setWholeHeight(wholeHeightRef.current)
    }
  }, [controlsRef, formRef, setSteps, stepperRef])

  const setupFieldsets = useCallback(
    (width, fsHeight) => {
      Array.from(formRef.current.children).forEach(fs => {
        if (fs && !fs.dataset.isready) {
          fs.style.float = 'left'
          fs.style.width = width + 'px'
          fs.style.minHeight = fsHeight + 'px'
          fs.style.maxHeight = fsHeight + 'px'
          fs.dataset.isready = 'true'
        }
      })
    },
    [formRef]
  )

  const layoutSetup = useCallback(
    (width, steps) => {
      formRef.current.style.width = width * (steps + 500) + 'px'
      formRef.current.style.marginLeft = errorRef.current ? -width + 'px' : 0
      setTimeout(() => {
        formRef.current.style.visibility = 'visible'
        formRef.current.style.transition = `margin-left ${animationTime / 1000}s`
      }, 100)

      setupFieldsets(width, steps)
    },
    [errorRef, formRef, setupFieldsets]
  )

  useEffect(() => {
    initialSetup()
  }, [initialSetup])

  useEffect(() => {
    if (!!updating) {
      let totalSteps = formRef.current.children.length
      if (errorRef.current) totalSteps--
      if (successRef.current) totalSteps--
      setSteps(totalSteps)
      initialSetup()
      layoutSetup()
      setTimeout(() => setUpdating(false), 200)
    }
  }, [updating])

  useEffect(() => {
    if (width) {
      setupFieldsets(width, steps)
    }
  }, [width, steps, setupFieldsets])

  useEffect(() => {
    if (!setupDone.current && width) {
      layoutSetup(width, fsHeight)
      setupDone.current = true
    }
  }, [layoutSetup, width, steps, fsHeight])

  return { layoutSetup, setupFieldsets, fsHeight, width, wholeHeight }
}

export default useSliderLayout
