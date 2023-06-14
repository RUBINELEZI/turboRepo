import { useState } from 'react'
import { cn } from 'utils'
import Image from 'next/image'
import TopNav from '../TopNav'
import allProducts from 'drizzle/seed/products.json'
import trashcanIcon from './trashcan.svg'

const CheckoutScreen = ({ shoppingCart, handicapMode, setScreen }) => {
  const { cartItems, removeItem, totalPrice } = shoppingCart
  const [products, setProducts] = useState(allProducts.filter(p => p.id in cartItems))
  const dims = handicapMode ? 70 : 140

  const handleRemove = ev => {
    const { id } = ev.currentTarget.dataset
    removeItem(id)
    setProducts(products => {
      const newProducts = products.filter(p => p.id !== +id)
      if (newProducts.length === 0) setTimeout(() => setScreen('home'), 300)
      return newProducts
    })
  }

  const onCheckout = () => setScreen('payment')

  return (
    <section>
      <TopNav shoppingCart={shoppingCart} handicapMode={handicapMode} setScreen={setScreen} />
      <div className="p-16 pt-0">
        <div
          className={cn(
            'h-[90vh] overflow-y-auto no-scrollbar',
            handicapMode && 'mt-[90%] h-[50vh]'
          )}
        >
          <div
            className={cn('grid gap-5 mt-[175px] pt-16 px-32', handicapMode && 'grid-cols-2 p-6')}
          >
            {products.map(product => {
              const { id, name, image, price } = product
              return (
                <article
                  key={id}
                  className={cn(
                    'relative bg-white items-center p-10 grid grid-cols-3 gap-5 text-md rounded-3xl',
                    !cartItems[id] && 'bg-red-300',
                    handicapMode && 'p-3'
                  )}
                >
                  <Image src={`/products/${image}`} width={dims} height={dims} alt={name} />
                  <div className={cn(handicapMode && 'col-span-2')}>
                    <div className="grid grid-rows-3 items-center">
                      <p className="">{handicapMode ? name.substr(0, 25) : name}</p>
                      <p>{parseInt(price, 10) * cartItems[id] || 0}&nbsp;kr</p>
                      <ProductControls shoppingCart={shoppingCart} product={product} />
                    </div>
                  </div>
                  <button data-id={id} onClick={handleRemove} className="absolute top-5 right-5">
                    <Image width={25} src={trashcanIcon} alt="trashcan icon" />
                  </button>
                </article>
              )
            })}
            <div className={cn(handicapMode && 'col-span-2')}>
              <button
                onClick={onCheckout}
                className="relative block w-full bg-white rounded-3xl p-3"
              >
                <span className="text-[2.5rem] text-[#FB2062]">Proceed to checkout</span>
                <span className="absolute top-9 right-8">{totalPrice} kr</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductControls = ({ shoppingCart, product }) => {
  const { cartItems, addToCart, incrementItem, decrementItem } = shoppingCart
  const itemCount = cartItems[product.id]

  const addItem = ev => addToCart(ev.currentTarget.dataset.id)
  const increment = ev => incrementItem(ev.currentTarget.dataset.id)
  const decrement = ev => decrementItem(ev.currentTarget.dataset.id)
  return (
    <div className="mt-3">
      <div className="text-md flex">
        <button
          onClick={decrement}
          data-id={product.id}
          className="border-black-300 aspect-square w-8 border-2 rounded-lg"
        >
          <span>-</span>
        </button>
        <button disabled className="flex justify-center items-center aspect-square w-8">
          <span>{itemCount || 0}</span>
        </button>
        <button
          onClick={increment}
          data-id={product.id}
          className="border-black-300 aspect-square w-8 border-2 rounded-lg"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  )
}

export default CheckoutScreen
