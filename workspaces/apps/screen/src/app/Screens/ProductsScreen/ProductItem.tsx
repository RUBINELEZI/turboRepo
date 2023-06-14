import { cn } from 'utils'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import ProductControls from './ProductControls'

const poppinsBold = Poppins({ subsets: ['latin'], weight: '700' })
const poppinsLight = Poppins({ subsets: ['latin'], weight: '300' })

const ProductItem = ({ product, shoppingCart }) => {
  const { cartItems } = shoppingCart
  const itemCount = cartItems[product.id]
  return (
    <div className={cn('p-2 rounded-3xl', itemCount && 'bg-[#FB2062]')}>
      <div className="w-full">
        <div className="bg-white p-3 rounded-2xl flex flex-col gap-5 justify-center items-center">
          <h3 className="flex text-center items-center font-extrabold h-[3rem] overflow-hidden">
            <span className={poppinsBold.className}>{product.name}</span>
          </h3>
          <div className="p-3">
            <div className="relative w-[200px] h-[200px] scale-[1]">
              <Image fill src={`/products/${product.image}`} alt={product.name} />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <ProductControls
              product={product}
              shoppingCart={shoppingCart}
              poppinsLight={poppinsLight}
            />
            <div className="bg-[#FB2062] text-white px-5 py-1 rounded-tl-xl rounded-br-xl">
              <span className={poppinsLight.className}>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
