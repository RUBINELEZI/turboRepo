import React, { useRef, useState, useEffect, useCallback } from 'react'
import usePieAnimator from './usePieAnimator'

const PieChart = ({ data, Tooltip, donut, noAnimation, animationTime = 0.3 }) => {
  const uniqueId = useRef(Math.floor(Math.random() * 100000))
  const total = data.reduce((a, b) => a + b.value, 0)
  const cumulativePercent = useRef(0)
  const [radius, setRadius] = useState(noAnimation ? donut.radius : 0)

  const mapper = useCallback(({ label, value, color }) => ({
    label,
    percent: value / total,
    value,
    color,
  }))

  const [pieData, setPieData] = useState(data.map(mapper))
  const { changePie } = usePieAnimator(pieData, setPieData, mapper)

  const containerRef = useRef(0)
  const tooltipsRef = useRef()
  const [containerWidth, setContainerWidth] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [mousePosition, setMousePosition] = useState({})
  const [setup, setSetup] = useState(false)

  useEffect(() => {
    if (donut && !noAnimation) {
      if (radius === donut.radius) {
        // setRadius(donut.radius)
      } else {
        setRadius(0)
        setTimeout(() => setRadius(donut.radius), animationTime * 1000)
      }
      setTimeout(() => setSetup(true), 100)
    }
  }, [])

  useEffect(() => {
    if (setup) {
      if (noAnimation) {
        setPieData(data.map(mapper))
      } else {
        changePie(data.map(mapper))
      }
    }
  }, [data])

  const onMouseEnter = ev => {
    setHovered(ev.target.dataset.label)
  }

  const onMouseLeave = ev => {
    setHovered(null)
  }

  const onMouseMove = ev => {
    const { clientX, clientY } = ev
    setMousePosition({ x: clientX + 10, y: clientY + 10 })
  }

  useEffect(() => {
    document.body.prepend(tooltipsRef.current)
    setContainerWidth(containerRef.current.offsetWidth)

    return () => {
      const tooltips = document.getElementById(uniqueId.current)
      document.body.removeChild(tooltips)
    }
  }, [])

  return (
    <div style={{ overflow: 'initial' }}>
      <div id={uniqueId.current} className="pie-chart-tooltips-container" ref={tooltipsRef}>
        {pieData.map(item => (
          <div
            key={item.label}
            style={{
              position: 'absolute',
              display: hovered === item.label ? 'block' : 'none',
              top: mousePosition.y,
              left: mousePosition.x,
              zIndex: 99999999,
            }}
          >
            <Tooltip item={item} />
          </div>
        ))}
      </div>
      <div ref={containerRef} style={{ width: '100%', overflow: 'initial', padding: '1rem' }}>
        <svg viewBox="-1 -1 2 2" style={{ transform: '-90deg' }} onMouseMove={onMouseMove}>
          {pieData.map((item, idx) => {
            const [startX, startY] = getCoordinatesForPercent(cumulativePercent.current)
            cumulativePercent.current += item.percent
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent.current)
            const largeArcFlag = item.percent > 0.5 ? 1 : 0
            const pathData = [
              `M ${startX} ${startY}`, // Move
              `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
              `L 0 0`, // Line
            ].join(' ')
            return (
              <path
                data-label={item.label}
                key={idx}
                d={pathData}
                fill={item.color}
                onMouseOver={onMouseEnter}
                onMouseOut={onMouseLeave}
              />
            )
          })}
          {donut && (
            <circle
              style={{ transition: `all ${animationTime}s` }}
              r={radius}
              cx="0"
              cy="0"
              fill={donut.color}
            />
          )}
        </svg>
      </div>
    </div>
  )
}

export default PieChart

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent)
  const y = Math.sin(2 * Math.PI * percent)

  return [x, y]
}
