import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav//Nav.jsx'
import HeroSelection from './components/HeroSelection/HeroSelection.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="min-h-screen flex flex-col bg-white text-white">
        <Header/>

        <Nav/>
        
        <HeroSelection/>

      </div>
    </>
  )
}

export default App
