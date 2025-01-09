import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className='h-fit w-full'>
          <Navbar />
        </div>
        <div className='h-full w-full'>
          <Hero />
        </div>
      </main>
    </>
  )
}

export default App
