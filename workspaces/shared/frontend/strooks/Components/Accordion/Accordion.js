import React, { useState, useEffect, useRef } from 'react'
import getInnerHeight from './getInnerHeight'
import styles from './styles'

const Accordion = ({ children, noAfter, defaultOpen }) => {
  const [active, setActive] = useState(defaultOpen)
  const [maxItemHeight, setMaxItemHeight] = useState(0)
  const accordionRef = useRef()

  useEffect(() => {
    const accordion = accordionRef.current
    const parent = accordion.parentNode
    const parentOffsetTop = parent.offsetTop
    const accordionHeight = accordion.offsetHeight
    const offsetTop = accordion.offsetTop
    window.accordion = accordion
    const parentHeight = getInnerHeight(accordion.parentNode)

    const maxItemHeight = parentHeight - accordionHeight - (offsetTop - parentOffsetTop)

    setMaxItemHeight(maxItemHeight + 'px')
  }, [])

  return (
    <div ref={accordionRef} className="strooks-accordion-container">
      <div className="strooks-accordion">
        <dl>
          {React.Children.map(children, (element, idx) => {
            const props = {
              index: idx,
              active: active === idx,
              setActive,
              maxHeight: maxItemHeight,
              styles,
            }
            return React.cloneElement(element, props)
          })}
          {!noAfter && (
            <div className="after" onClick={() => setActive(null)} style={styles.after}></div>
          )}
        </dl>
      </div>
    </div>
  )
}

export default Accordion
