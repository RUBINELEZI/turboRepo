'use client'
import { useState } from 'react'
import Background from './Background'
import Image from 'next/image'
import Screens from './screens'
import useHandicapControl from './useHandicapControl'
import useShoppingCart from './useShoppingCart'
import handicapLogo from './handicap.svg'
import products from 'drizzle/seed/products.json'

const ScreensContainer = () => {
  const [screen, setScreen] = useState('home')
  const shoppingCart = useShoppingCart(products)
  const { handicapMode, toggleHandicapMode } = useHandicapControl()
  const Screen = Screens[screen]

  return (
    <div className="h-[100vh] w-[100vw]">
      <Background screen={screen} />
      <div className="absolute w-[100vw]">
        <Screen shoppingCart={shoppingCart} setScreen={setScreen} handicapMode={handicapMode} />
      </div>
      <div onClick={toggleHandicapMode} className="absolute bottom-2 right-2" role="button">
        <Image width={handicapMode ? 90 : 120} src={handicapLogo} alt="handicap button" priority />
      </div>
    </div>
  )
}

export default ScreensContainer
