'use client'

import Map from 'map'
import styles from '../home.module.scss'
import ServicesSelector from './ServicesSelector'
import CategoryCard from 'ui/CategoryCard'
import BusinessCard from 'ui/BusinessCard'
import Carousel from 'ui/Carousel'

const HomeScreen = ({ categories, salons, categoriess, featured }) => {
  const cardClicked = () => {
    console.log('123')
  }

  return (
    <>
      <ServicesSelector categories={categories} />
      <div className={styles.mapContainer}>
        <Map salons={salons} />
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4 pb-8 overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">Find what you need</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriess.map((category, index) => (
              <CategoryCard
                key={index}
                text={category.name}
                image={category.image}
                onClick={cardClicked}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold mb-4">Popular</h2>
          <div className="w-full  md:px-40">
            <Carousel>
              {featured.map((business, index) => (
                <div key={index} className="px-2">
                  <BusinessCard
                    image={business.image}
                    address={business.address}
                    name={business.name}
                    isOpen={business.isOpen}
                    priceRange={business.priceRange}
                    onClick={cardClicked}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="bg-[#f76566] text-white hover:bg-[#f75566] transition-colors duration-500 relative text-center p-6 cursor-pointer my-8">
          <h2 className="text-2xl font-bold mb-4">We have gift cards!</h2>
          <p className="mb-4">Give the gift of beauty with a digital gift card.</p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
