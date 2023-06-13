import React, { useEffect, useRef, useState } from 'react'
import Keyframes from '../Keyframes'

const TypeWriter = ({ text, time = 3, size = 'inherit', delay = 0, clearBlink = false }) => {
  const [backgroundColor, setBgColor] = useState(null)
  const [textColor, setTextColor] = useState(null)
  const [twAnimation, setAnimation] = useState(null)
  const [blink, setBlink] = useState(null)
  const [show, setShow] = useState(false)

  const ref = useRef()
  const afterRef = useRef()

  useEffect(() => {
    let bgColor
    let textColor
    let parent = ref.current.parentElement
    while (!bgColor && parent !== document.body) {
      parent = parent.parentElement
      bgColor = window.getComputedStyle(parent).backgroundColor
      textColor = window.getComputedStyle(parent).color
    }

    setBgColor(bgColor)
    setTextColor(textColor)

    const twAnimation = `typewriter ${time + 's'} steps(${text.length}) forwards`
    setAnimation(twAnimation)
    setBlink(`blink 600ms steps(${text.length}) infinite`)
    setTimeout(() => setShow(true), delay * 1000)

    if (clearBlink) {
      setTimeout(() => {
        if (!!afterRef) {
          afterRef.current.remove()
        }
      }, delay * 1000 + time * 1000)
    }
  }, [time, text.length, delay, clearBlink, text])

  return (
    <div ref={ref} style={{ ...containerStyles, fontSize: size }}>
      <Keyframes
        id="strooks.typewriter"
        name="typewriter"
        from={{ left: '0%' }}
        to={{ left: '100%' }}
      />
      <Keyframes
        id="strooks.typewriter.blink"
        name="blink"
        to={{ backgroundColor: 'transparent' }}
      />
      {/* {show ? ( */}
      {show ? (
        <div style={{ position: 'relative', display: 'inline-block', width: 'auto' }}>
          <div
            style={{ ...commonStyles, backgroundColor, animation: twAnimation }}
            className="before"
          ></div>
          <div className="content">{text}</div>
          <div
            ref={afterRef}
            style={{
              ...commonStyles,
              width: '0.2rem',
              backgroundColor: textColor,
              animation: [twAnimation, blink].join(', '),
            }}
            className="after"
          ></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

const containerStyles = {
  fontFamily: 'Source Code Pro monospace',
  position: 'relative',
}

const commonStyles = {
  content: '',
  position: 'absolute',
  width: '100%',
  heigth: '100%',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

export default TypeWriter
