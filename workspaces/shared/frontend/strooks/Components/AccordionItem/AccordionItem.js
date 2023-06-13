import React from 'react'

const AccordionItem = ({ title, children, index, active, setActive, maxHeight, styles }) => {
  const onHeaderClick = ev => {
    ev.preventDefault()
    if (active) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  const plusStyle = { ...styles.plus, transform: active ? 'rotate(-225deg)' : 'rotate(0deg)' }

  const itemStyle = {
    ...styles.item,
    maxHeight: active ? maxHeight : '0',
    minHeight: active ? maxHeight : '0',
    overflow: active ? 'auto' : 'hidden',
  }
  return (
    <React.Fragment>
      <dt>
        <h4 className="title">
          <a
            href={`#strooks-accordion-item-${index}`}
            aria-expanded={active ? 'true' : 'false'}
            aria-controls={`#strooks-accordion-item-${index}`}
            style={styles.header}
            onClick={onHeaderClick}
          >
            <span style={plusStyle}>+</span>
            {title}
          </a>
        </h4>
      </dt>
      <dd
        style={itemStyle}
        id={`strooks-accordion-item-${index}`}
        aria-hidden={active ? 'false' : 'true'}
      >
        <div className="item">{children}</div>
      </dd>
    </React.Fragment>
  )
}

export default AccordionItem
