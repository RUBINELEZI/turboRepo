import BuyProductsScreen from '@/screens/BuyProducts'
import products from 'drizzle/seed/products.json'

const BuyProductsPage = (props) => {
  return <BuyProductsScreen {...props} products={products} />
}

export default BuyProductsPage
