import { useState, useEffect, useRef } from 'react'
import fillForm from './_fill-form'
import findPath from './_find-path'

const useForm = (formRef, initialState = {}, options = {}) => {
  const [initialized, setInitialized] = useState(false)
  const [filledState, setFilledState] = useState(false)
  const [state, setState] = useState(initialState)
  const stateRef = useRef(initialState)

  const { persist, realtime = true } = options

  if (!!persist && typeof localStorage !== 'undefined') {
    let lsState = localStorage.getItem(persist)
    if (lsState) {
      initialState = JSON.parse(lsState)
    }
  }

  useEffect(() => {
    if (!filledState) {
      const filledState = JSON.parse(JSON.stringify(initialState))
      const { current: formElement } = formRef
      const elements = Array.from(formElement.querySelectorAll('*'))
      elements.forEach(elem => {
        if (!elem.name || elem.nodeName === 'FIELDSET') return

        const path = findPath(elem, formElement)
        let target = filledState
        for (let i = 0; i < path.length; i++) {
          let prop = path[i]
          target[prop] = target[prop] || {}
          target = target[prop]
        }

        //TODO account for unchecked checkboxes (false not null)
        target[elem.name] = typeof target[elem.name] !== 'undefined' ? target[elem.name] : null

        if (realtime) {
          setState(filledState)
        }
        stateRef.current = filledState
        setFilledState(true)
      })
    }
  }, [formRef, setFilledState, filledState, state, realtime])

  const update = param => {
    let newState
    if (typeof param === 'function') {
      newState = param(stateRef.current)
    } else {
      newState = param
    }
    fillForm(formRef.current, newState)
    stateRef.current = newState
    if (realtime) {
      setState(newState)
    }
    if (!!persist && typeof localStorage !== 'undefined') {
      localStorage.setItem(persist, JSON.stringify(newState))
    }
  }

  useEffect(() => {
    const formElement = formRef.current
    const onReset = () => {
      stateRef.current = {}
      if (realtime) {
        setState({})
      }
      if (!!persist && typeof localStorage !== 'undefined') {
        localStorage.removeItem(persist)
      }
    }
    const onSubmit = ev => {
      ev.preventDefault()
      setState(stateRef.current)
    }

    formElement.addEventListener('input', onChange)
    formElement.addEventListener('change', onChange)
    formElement.addEventListener('reset', onReset)
    formElement.addEventListener('submit', onSubmit)
    return () => {
      formElement.removeEventListener('input', onChange)
      formElement.removeEventListener('change', onChange)
      formElement.removeEventListener('reset', onReset)
      formElement.removeEventListener('submit', onSubmit)
    }
  }, [formRef, setState, realtime, persist])

  useEffect(() => {
    const { current: formElement } = formRef
    if (formElement && !initialized) {
      fillForm(formElement, stateRef.current)
      setInitialized(true)
    }
  }, [formRef.current, initialState, initialized])

  const onChange = ev => {
    ev.persist && ev.persist()

    const target = ev.target
    const { name, value, dataset = {} } = target
    if (!name) return
    const type = dataset.type || target.type
    const path = findPath(target, formRef.current)

    const newState = { ...stateRef.current }
    let targetObj = newState
    for (let prop of path) {
      targetObj[prop] = targetObj[prop] || {}
      targetObj = targetObj[prop]
    }

    const isTrueFalse =
      target.type === 'radio' &&
      formRef.current[name].length === 2 &&
      Array.from(formRef.current[name]).every(el => ['true', 'false'].includes(el.value))

    //Case for Checkbox:
    if (isTrueFalse) {
      targetObj[name] = value === 'true' ? true : value === 'false' ? false : null
    } else if (target.type === 'checkbox') {
      const { checked } = target
      const count = formRef.current[name].length
      if (count > 1) {
        targetObj[name] = [...formRef.current[name]].filter(c => c.checked).map(c => c.value)
      } else {
        targetObj[name] = checked
      }
    } else if (target.nodeName === 'SELECT' && target.multiple) {
      targetObj[name] = [...target.options].filter(o => o.selected).map(o => o.value)
    } else {
      if (['number', 'range'].includes(type)) {
        if (value === '') {
          targetObj[name] = null
        } else {
          targetObj[name] = +value
        }
      } else {
        targetObj[name] = value
      }
    }

    if (!!persist && typeof localStorage !== 'undefined') {
      localStorage.setItem(persist, JSON.stringify(newState))
    }
    stateRef.current = newState
    if (realtime) {
      setState(newState)
    }
  }

  const clear = () => {
    if (!!persist && typeof localStorage !== 'undefined') {
      localStorage.removeItem(persist)
    }
    setState(null)
    formRef.current.reset()
  }

  return [state, update, clear]
}

export default useForm

export { useRef }
