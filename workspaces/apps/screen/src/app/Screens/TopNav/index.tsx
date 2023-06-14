import Image from 'next/image'
import { cn } from 'utils'
import mySalonLogoRed from './my-salon-logo-red.svg'
import shoppingCartIcon from './shopping-cart.svg'
import backArrowIcon from './back-arrow.svg'

const TopNav = ({ setScreen, handicapMode, shoppingCart }) => {
  const { totalItems } = shoppingCart

  const changeScreen = ev => {
    const { action } = ev.currentTarget.dataset
    if (action === 'checkout') {
      if (totalItems > 0) setScreen('checkout')
      return
    }
    setScreen(action)
  }

  return (
    <nav
      className={cn(
        'bg-white top-0 h-[175px] grid grid-cols-3 rounded-b-[30px] fixed w-full z-50',
        handicapMode && 'top-[45vh]'
      )}
    >
      <div className="flex justify-center h-full items-center">
        <button data-action="home" onClick={changeScreen}>
          <Image width={20} src={backArrowIcon} priority alt="back arrow" />
        </button>
      </div>
      <div className="flex justify-center h-full items-center">
        <button data-action="home" onClick={changeScreen}>
          <Image width={310} src={mySalonLogoRed} priority alt="mysalon logo" />
        </button>
      </div>
      <div className="flex justify-center h-full items-center">
        <button data-action="checkout" className="relative" onClick={changeScreen}>
          <Image width={60} src={shoppingCartIcon} priority alt="shopping cart" />
          {totalItems > 0 && (
            <div className="absolute w-[30px] h-[30px] bg-[#FB2062] flex justify-center items-center rounded-full -top-1 -right-3">
              <span className="text-white">{totalItems}</span>
            </div>
          )}
        </button>
      </div>
    </nav>
  )
}

export default TopNav
