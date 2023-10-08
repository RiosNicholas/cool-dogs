import { useState } from 'react'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import './App.css'
import BanList from './components/BanList'
import DiscoverDogs from './components/DiscoverDogs'
import VisitedDogs from './components/VisitedDogs'

function App() {
  /* HOOKS */
  const [banList, setBanList] = useState([]);

  const addToBanList = (item) => {
    setBanList([...banList, item]);
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-3 '>
        <VisitedDogs />
        <DiscoverDogs apiKey={ACCESS_KEY} banList={banList} addToBanList={addToBanList}/>
        <BanList banList={banList} addToBanList={addToBanList}/>
      </div>
    </>
  )
}

export default App
