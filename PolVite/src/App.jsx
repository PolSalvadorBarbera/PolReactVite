import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav//Nav.jsx'
import HeroSelection from './components/HeroSelection/HeroSelection.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import topProducts, { allProducts } from './data/products.js'
import ProductGrid from './components/Product/ProductGrid.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="min-h-screen flex flex-col bg-white text-white">
        <Header/>

        <Nav/>
        
        <HeroSelection/>

        {/* Selector de productes "destacats" fem crida a ProductGrid*/}
        <section className="container mx-auto px-4 py-8">
          <Tabs tabs={["New", "Promo", "Best Seller"]} />
          <ProductGrid products={topProducts} />
        </section>

        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-6 text-black">All Products</h2>
          <ProductGrid products={allProducts} />
        </section>

      </div>
    </>
  )
}

export default App
