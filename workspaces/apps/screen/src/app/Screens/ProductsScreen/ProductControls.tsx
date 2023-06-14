const ProductControls = ({ shoppingCart, product, poppinsLight }) => {
  const { cartItems, addToCart, incrementItem, decrementItem } = shoppingCart
  const itemCount = cartItems[product.id]

  const addItem = ev => addToCart(ev.currentTarget.dataset.id)
  const increment = ev => incrementItem(ev.currentTarget.dataset.id)
  const decrement = ev => decrementItem(ev.currentTarget.dataset.id)

  return itemCount ? (
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
  ) : (
    <button
      data-id={product.id}
      onClick={addItem}
      className="bg-[#FB2062] text-white px-5 py-1 rounded-tr-xl rounded-bl-xl"
    >
      <span className={poppinsLight.className}>Add to Cart</span>
    </button>
  )
}

export default ProductControls
