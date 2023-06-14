import { cn } from 'utils'
import Image from 'next/image'
import mySalonLogo from './my-salon-logo.svg'
import iconCalendar from './icon-calendar.svg'
import iconPurse from './icon-purse.svg'
import iconMoon from './icon-moon.svg'
import handicapLogo from './handicap.svg'

const HomeScreen = ({ handicapMode, setScreen }) => {
  return (
    <section>
      <div className="mt-96 absolute w-[100vw] flex justify-center stransition-all duration-300 ease-linear">
        <Image width={550} src={mySalonLogo} alt="my salon logo" priority />
      </div>
      <div
        className={cn(
          'h-[100vh] w-full grid grid-rows-[0fr_2fr]',
          handicapMode && 'grid-rows-[1fr_1fr]'
        )}
      >
        <div className=" "></div>
        <div className="flex flex-col justify-center items-center">
          <HomeButtons setScreen={setScreen} handicapMode={handicapMode} />
        </div>
      </div>
    </section>
  )
}

export default HomeScreen

const HomeButtons = ({ handicapMode, setScreen }) => {
  const buttons = [
    { text: 'Book Services', icon: iconCalendar, screen: 'services' },
    { text: 'Buy Products', icon: iconPurse, screen: 'products' },
    { text: 'Quiet Time', icon: iconMoon, screen: 'quietTime' },
  ]

  const changeScreen = ev => setScreen(ev.currentTarget.dataset.screen)

  return (
    <div className={cn('flex flex-col gap-20', handicapMode && 'flex-row')}>
      {buttons.map(({ text, icon, screen }) => (
        <button
          className="relative bg-white text-[3rem] text-[#FB2062] rounded-2xl"
          data-screen={screen}
          onClick={changeScreen}
          key={screen}
        >
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
      ))}
    </div>
  )
}
