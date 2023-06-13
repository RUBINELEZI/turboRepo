import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'

const NumberForm = ({ setCode, onSubmit, digits, mask }) => {
  mask = mask ? Array.from(mask) : new Array(digits).fill('X')
  const [pasting, setPasting] = useState(false)
  const fieldsetRef = useRef()
  const maxVal = Math.pow(10, digits)
  const minVal = Math.pow(10, digits - 1)

  useLayoutEffect(() => {
    setTimeout(() => fieldsetRef.current.children[0].focus(), 200)
  }, [])

  useEffect(() => {
    const onPaste = ev => {
      if (pasting) return
      setPasting(true)
      const code = +(event.clipboardData || window.clipboardData).getData('text')
      if (!isNaN(code) && code >= minVal) {
        const str = '' + code
        const { children } = fieldsetRef.current
        Array.from(children)
          .filter(c => c.nodeName === 'INPUT')
          .forEach((elem, i) => (elem.value = str[i]))
        setCode(+code)
        setTimeout(() => children[children.length - 1].focus(), 200)
      }
    }
    document.addEventListener('paste', onPaste)
    return () => document.removeEventListener('paste', onPaste)
  }, [onSubmit, pasting, setCode])

  const onKeyDown = ev => {
    const findPreviousInput = input => {
      if (!input) return null
      let previous = input.previousSibling
      while (previous) {
        if (previous.nodeName === 'INPUT') {
          return previous
        }
        return findPreviousInput(previous)
      }
    }

    if (ev.keyCode === 8) {
      const previousInput = findPreviousInput(ev.target)
      if (previousInput) {
        ev.target.value = ''
        previousInput.focus()
      }
      return
    }
    if (ev.keyCode < 48 || ev.keyCode > 57) {
      ev.stopPropagation()
      setTimeout(() => {
        ev.target.value = ''
        ev.target.focus()
      })
      return false
    }
    ev.target.value = ''
  }

  const onFormChange = ev => {
    const { target, value } = ev
    const currCode = +Array.from(fieldsetRef.current.children)
      .filter(c => c.nodeName === 'INPUT')
      .map((elem, i, arr) => {
        if (elem === ev.target && arr[i + 1] && elem.value) {
          arr[i + 1].focus()
        }
        return elem.value
      })
      .join('')
    setCode(+currCode)
  }
  return (
    <fieldset ref={fieldsetRef}>
      {mask.map((val, idx) =>
        val.toLowerCase() === 'x' ? (
          <input
            key={idx}
            type="text"
            className="form-control form-control-lg"
            maxLength="1"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            autoCapitalize="off"
            onKeyDown={onKeyDown}
            onChange={onFormChange}
          />
        ) : (
          <span key={idx}>{val}</span>
        )
      )}
    </fieldset>
  )
}

export default NumberForm
