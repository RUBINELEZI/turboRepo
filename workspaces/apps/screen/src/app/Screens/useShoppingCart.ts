import { useState } from 'react'

const useShoppingCart = allProducts => {
  const [cartItems, setCartItems] = useState({})
  const totalItems = Object.entries(cartItems).reduce((res, [, count]) => res + count, 0)

  const products = allProducts.filter(p => p.id in cartItems)
  const totalPrice = products.reduce(
    (t, p) => t + (parseInt(p.price, 10) * cartItems[p.id] || 0),
    0
  )

  const addToCart = id =>
    setCartItems(items => {
      const newItems = { ...items }
      newItems[id] = newItems[id] || 1
      return newItems
    })

  const removeItem = id =>
    setCartItems(items => {
      const newItems = { ...items }
      delete newItems[id]
      return newItems
    })
  const incrementItem = id =>
    setCartItems(items => {
      const newItems = { ...items }
      newItems[id] = (newItems[id] || 0) + 1
      return newItems
    })
  const decrementItem = id =>
    setCartItems(items => {
      const newItems = { ...items }
      newItems[id] = newItems[id] - 1
      if (newItems[id] <= 0) delete newItems[id]
      return newItems
    })

  const emptyCart = () => setCartItems({})

  return {
    cartItems,
    totalItems,
    totalPrice,
    products,
    allProducts,
    addToCart,
    removeItem,
    incrementItem,
    decrementItem,
    emptyCart,
  }
}

export default useShoppingCart
