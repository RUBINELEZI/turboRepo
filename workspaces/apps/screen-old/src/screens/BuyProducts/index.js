import cx from 'classnames'
import Image from 'next/image'
import styles from './buyproducts.module.scss'

const BuyProductsScreen = ({ products, handicapMode }) => {
  console.log({ handicapMode })

  const categories = distinct(products, 'category')
  const brands = distinct(products, 'brand')

  // console.log(brands)

  return (
    <div className={cx(styles.main, handicapMode && styles.handicapMode)}>
      <div></div>
      <div className={styles.productsContainer}>
        <div></div>
        {/* <div className={styles.filters}>
          <div className={styles.categories}>
            <h3>Category:</h3>
            {categories.map((cat) => (
              <div key={cat} className={styles.pill}>
                {cat}
              </div>
            ))}
          </div>
        </div> */}
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.name} className={styles.product}>
              <div className={styles.productCard}>
                <h4>{product.name}</h4>
                <Image
                  width={256}
                  height={256}
                  src={`/products/${product.image}`}
                  alt={product.name}
                />
                <div className={styles.price}>{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default BuyProductsScreen

const distinct = (arr, prop) =>
  [
    ...arr.reduce((result, item) => {
      result.add(item[prop])
      return result
    }, new Set()),
  ].sort()
