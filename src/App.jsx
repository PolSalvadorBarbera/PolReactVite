import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import HeroSelection from './components/HeroSelection/HeroSelection.jsx'
import Tabs from './components/Tabs/Tabs.jsx'
import allProducts from './data/productsData.json'
import ProductGrid from './components/Product/ProductGrid.jsx'
import FeaturedProduct from './components/Product/FeaturedProduct.jsx'
import Footer from './components/Footer/Footer.jsx'
import AudioPlayer from './components/Media/AudioPlayer.jsx'
import VideoPlayer from './components/Media/VideoPlayer.jsx'

import mavic4ProImg from './assets/img/Mavic4Pro.jpeg'

const HomePage = ({allProducts, mavic4ProImg}) => {
  const [activeTab, setActiveTab] = useState("New");

  const getFilteredProducts = () => {
    switch (activeTab) {
      case "Promo":
        return allProducts.filter(product => product.discountPercentage > 0);
      case "New": // Filtrem i ordenem de mes nou a menys 6 productes més nous
        return allProducts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
      case "Best Seller":
      default:
        return allProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <>
      <HeroSelection/>
      
      <section className="container mx-auto px-4 py-8">
        <Tabs tabs={["New", "Promo", "Best Seller"]} activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductGrid products={filteredProducts} />
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
  );
}




function App() {
 
  return (
    <>
      {/* El BrowserRouter és necesari perque funcionin les rutes */} 
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white text-white">
          <Header/>

          <Nav/>
          
          <Routes> 
            
            <Route path='/' element = { //Renderitzem el HomePage i li passem les dades com a props
              <HomePage allProducts={allProducts} mavic4ProImg={mavic4ProImg}/>}> 
            </Route>
            
            <Route path='/media' element={
              <div className="min-h-screen bg-gray-100">
                <AudioPlayer />
                <VideoPlayer />
              </div>
            } />
            
            {/* Aquí podré afegir més rutes */}

          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
