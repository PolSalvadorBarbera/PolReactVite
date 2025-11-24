import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Nav from './components/Nav//Nav.jsx'
import HeroSelection from './components/HeroSelection/HeroSelection.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import topProducts, { allProducts } from './data/products.js'
import ProductGrid from './components/Product/ProductGrid.jsx'
import FeaturedProduct from './components/Product/FeaturedProduct.jsx'
import Footer from './components/Footer/Footer.jsx'

import mavic4ProImg from './assets/Img/Mavic4Pro.jpeg'

const HomePage = ({topProducts, allProducts, mavic4ProImg}) => {
  {/*Posarem aqui tota la pàgina principal*/}

  <>
    <HeroSelection/>
    
    <section className="container mx-auto px-4 py-8">
      <Tabs tabs={["New", "Promo", "Best Seller"]} />
      <ProductGrid products={topProducts} />
    </section>

    <section className="py-12 bg-gray-900">
      <FeaturedProduct
        title="DJI MAVIC 4 PRO"   
        subtitle="Your world in 360°"
        isNew={true}
        backgroundImage={mavic4ProImg}
      />
    </section>

    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-black">All Products</h2>
      <ProductGrid products={allProducts} />
    </section>
  </>
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="min-h-screen flex flex-col bg-white text-white">
        <Header/>

        <Nav/>
        
        // Definim les rutes de la pàgina 
        <Routes>
          <Route path='/' element ={ <HomePage topProducts={topProducts} allProducts={allProducts} mavic4ProImg={mavic4ProImg}/>}></Route>
          <Route path='
        </Routes>
        

        


        <Footer/>
      </div>
    </>
  )
}

export default App
