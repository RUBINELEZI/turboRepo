import styles from './home.module.scss'
import apiClient from 'utils/apiClient'
import HomeScreen from './HomeScreen'

export default async function Home() {
  // const categories = await apiClient.GET('services')
  // const featured = await apiClient.GET('salons/featured')

  const [salons, mockBusinesses, mockCategories, mockProducts] = await Promise.all([
    apiClient.GET('salons'),
    apiClient.GET('mocks/businesses'),
    apiClient.GET('mocks/categories'),
    apiClient.GET('mocks/products'),
  ])

  return (
    <main className={styles.main}>
      <HomeScreen
        products={mockProducts}
        // categories={categories}
        salons={salons}
        categoriess={mockCategories}
        featured={mockBusinesses}
      />
    </main>
  )
}
