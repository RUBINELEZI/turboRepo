import React, { useEffect, useState, useRef, useCallback } from 'react'

const BarChart = ({ chartData, Tooltip, animationTime = 0.6 }) => {
  const uniqueId = useRef(Math.floor(Math.random() * 100000))
  const containerRef = useRef()
  const tooltipsRef = useRef()
  const [maxBarHeight, setMaxBarHeight] = useState(0)
  const [barWidth, setBarWidth] = useState(0)
  const [maxPercent, setMaxPercent] = useState(0)
  const total = chartData.reduce((a, b) => a + b.value, 0)
  const [data, setData] = useState([])
  const [hovered, setHovered] = useState(null)
  const [mousePosition, setMousePosition] = useState({})

  const mapper = useCallback(({ label, value, color }) => ({
    label,
    percent: value / total,
    value,
    color,
  }))

  useEffect(() => {
    const maxPercent = Math.max(...data.map(i => i.percent))
    setMaxPercent(maxPercent)
  }, [data])

  const setup = useCallback(() => {
    const containerHeight = containerRef.current.offsetHeight
    const containerWidth = containerRef.current.offsetWidth
    setMaxBarHeight(containerHeight * 1)
    setBarWidth(containerWidth / (chartData.length * 2))
  })

  useEffect(() => {
    window.addEventListener('resize', setup)
    return () => window.removeEventListener('resize', setup)
  }, [])

  useEffect(() => {
    setup()
  }, [maxPercent])

  useEffect(() => {
    setData(chartData.map(mapper))
  }, [chartData])

  useEffect(() => {
    document.body.prepend(tooltipsRef.current)

    return () => {
      const tooltips = document.getElementById(uniqueId.current)
      document.body.removeChild(tooltips)
    }
  }, [])

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

  const containerStyle = {
    height: '100%',
    width: '100%',
    gap: barWidth + 'px',
    paddingLeft: barWidth / 2 + 'px',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  }
  return (
    <div ref={containerRef} className="flex" style={containerStyle} onMouseMove={onMouseMove}>
      {Tooltip && (
        <div id={uniqueId.current} className="bar-chart-tooltips-container" ref={tooltipsRef}>
          {data.map(item => (
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
      )}
      {maxPercent &&
        data.map((item, idx) => {
          const barStyle = {
            position: 'absolute',
            bottom: '-10%',
            width: barWidth + 'px',
            marginLeft: `${barWidth * idx * 2}px`,
            backgroundColor: item.color,
            height: maxBarHeight * item.percent * (1 / maxPercent),
            maxHeight: maxBarHeight * item.percent * (1 / maxPercent),
            borderRadius: '10px',
            marginBottom: '1rem',
            transition: `all ${animationTime}s`,
          }
          return (
            <div
              key={item.label}
              style={barStyle}
              data-label={item.label}
              onMouseOver={onMouseEnter}
              onMouseOut={onMouseLeave}
            ></div>
          )
        })}
    </div>
  )
}

export default BarChart
