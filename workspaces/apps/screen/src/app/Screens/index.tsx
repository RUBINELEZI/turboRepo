'use client'
import { useState, useEffect, useRef } from 'react'
import { cn } from 'utils'
import Image from 'next/image'
import mySalonLogo from './my-salon-logo.svg'
import iconCalendar from './icon-calendar.svg'
import iconPurse from './icon-purse.svg'
import iconMoon from './icon-moon.svg'
import handicapLogo from './handicap.svg'

const Screens = () => {
  const [handicapMode, setHandicapMode] = useState(false)
  const toggleHandicapMode = () => setHandicapMode(mode => !mode)

  return (
    <div className="h-[100vh] w-[100vw]">
      <div
        className={cn(
          'mt-96 absolute w-[100vw] flex justify-center transition-all duration-500 ease-linear'
          // handicapMode && 'mt-32'
        )}
      >
        <Image width={550} src={mySalonLogo} alt="my salon logo" priority />
      </div>
      <div
        className={cn(
          'h-[100vh] w-full grid grid-rows-[0fr_2fr] transition-all duration-500 ease-linear',
          handicapMode && 'grid-rows-[1fr_1fr]'
        )}
      >
        <div className=" "></div>
        <div className="flex flex-col justify-center items-center">
          <div className={cn('flex flex-col gap-20', handicapMode && 'flex-row')}>
            <Button text="Book Services" icon={iconCalendar} handicapMode={handicapMode} />
            <Button text="Buy Products" icon={iconPurse} handicapMode={handicapMode} />
            <Button text="Quiet Time" icon={iconMoon} handicapMode={handicapMode} />
          </div>
        </div>
      </div>
      <div onClick={toggleHandicapMode} className="absolute bottom-2 right-2" role="button">
        <Image width={120} src={handicapLogo} alt="handicap button" priority />
      </div>
    </div>
  )
}

export default Screens

const Button = ({ icon, text, handicapMode }) => {
  return (
    <button className="relative bg-white text-[3rem] text-[#FB2062] rounded-2xl">
      <div
        className={cn(
          'flex items-center gap-10 py-10 px-20 transition-all',
          handicapMode && 'pb-20'
        )}
      >
        <Image width={80} src={icon} alt="icon-calendar" priority />
        <span
          className={cn(
            // 'block break-normal overflow-hidden',
            handicapMode && 'left-0 absolute text-[1.8rem] w-full bottom-3'
          )}
        >
          {text}
        </span>
      </div>
    </button>
  )
}

// const buttonRef = useRef()
//   const spanRef = useRef()
//   useEffect(() => {
//     const { current: button } = buttonRef
//     const { current: span } = spanRef
//     const initialWidth = button.offsetWidth
//     console.log({ initialWidth })

//     const shrink = count => {
//       const op = count * 0.01
//       const newWidth = initialWidth - count * 5

//       if (count % 5 === 0) {
//         span.textContent = span.textContent.substr(1)
//       }
//       button.style.maxWidth = newWidth + 'px'
//       if (newWidth > 220) {
//         animationId = requestAnimationFrame(() => shrink(++count))
//       } else {
//         // onAnimationEnd()
//       }
//     }

//     let animationId
//     if (handicapMode) {
//       animationId = requestAnimationFrame(() => shrink(0))
//     }

//     return () => {
//       cancelAnimationFrame(animationId)
//     }
//   }, [handicapMode])
