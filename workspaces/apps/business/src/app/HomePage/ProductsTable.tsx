import Image from 'next/image'
import { DataTable } from 'strooks'
import useProducts from './useProducts'
import styles from './home.module.scss'

const ProductsTable = () => {
  const { products } = useProducts()

  if (!products) return null

  console.log(products)

  return (
    <div className={styles.tableContainer}>
      <DataTable
        columns={[
          {
            label: 'image',
            field: 'image',
            format: (val, prod) => {
              return (
                <div className="flex justify-center">
                  <div className="w-[75px] h-[75px] overflow-hidden">
                    <img className="rounded-lg" width="75px" src={val} />
                  </div>
                </div>
              )
            },
          },
          { label: 'Active', field: 'active', format: val => val },
          { label: 'Name', field: 'name' },
          {
            label: 'Cost',
            field: 'cost',
            format: formatCurrency,
          },
          {
            label: 'Price',
            field: 'price',
            format: formatCurrency,
          },
        ]}
        data={products.map(productMapper)}
      />
    </div>
  )
}

export default ProductsTable

const productMapper = product => ({
  // id: product.id,
  name: product.name,
  active: product.active,
  cost: product.product_data[0].cost_price,
  price: product.product_data[0].retail_price,
  image: product.image,
  categories: product.categories,
  // description: product.description,
})

const formatCurrency = val => (val / 100).toFixed(2) + ' kr'
