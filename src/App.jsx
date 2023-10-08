import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './App.css'
import BanList from './components/BanList'
import DiscoverDogs from './components/DiscoverDogs'
import VisitedDogs from './components/VisitedDogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <VisitedDogs />
        <DiscoverDogs />
        <BanList />
      </div>
    </>
  )
}

export default App
