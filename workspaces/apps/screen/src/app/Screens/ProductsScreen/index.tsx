import { cn } from 'utils'
import TopNav from '../TopNav'
import ProductItem from './ProductItem'

const ProductsScreen = ({ setScreen, handicapMode, shoppingCart }) => {
  const { allProducts } = shoppingCart
  return (
    <section>
      <TopNav
        path={['home', 'products']}
        shoppingCart={shoppingCart}
        handicapMode={handicapMode}
        setScreen={setScreen}
      />
      <div className="p-16 pt-0">
        <div
          className={cn(
            'h-[90vh] overflow-y-auto no-scrollbar',
            handicapMode && 'mt-[100%] h-[40vh]'
          )}
        >
          <div className="grid grid-cols-3 gap-10 mt-[175px] pt-16">
            {allProducts.map(product => (
              <ProductItem key={product.id} product={product} shoppingCart={shoppingCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsScreen
