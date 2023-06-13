'use client'
import ProductsTable from './ProductsTable'
import Categories from './Categories'

const HomePage = () => {
  return (
    <div className="h-[100vh] pt-24 justify-center">
      <h1 className="text-xl text-center font-extrabold">Products</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <ProductsTable />
        </div>
        <Categories />
      </div>
    </div>
  )
}

export default HomePage
