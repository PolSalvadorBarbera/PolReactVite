import { useState } from 'react'
import Header from './components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="min-h-screen flex flex-col bg-white text-white">
        <Header/>
        
      </div>
    </>
  )
}

export default App
