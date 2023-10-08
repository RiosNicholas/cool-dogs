import { useState } from 'react'
import './App.css'
import BanList from './components/BanList'
import DiscoverDogs from './components/DiscoverDogs'
import VisitedDogs from './components/VisitedDogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <VisitedDogs /> */}
      <DiscoverDogs />
      {/* <BanList /> */}
    </>
  )
}

export default App
