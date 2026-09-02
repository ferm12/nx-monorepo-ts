import { useState } from 'react'

import Overlay from './Overlay.js'

import {beersData} from './beersData.js'


function Beers() {
  const [beers, setBeers] = useState<any[]>(beersData)
  const [beer, setBeer] = useState<any>(null)
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  const handleBeerClick = (beer: string) => {
    console.log('Beer clicked:', beer)
    setBeer(beer)
    setOpenOverlay(!openOverlay)

  }
  function timer() {
    let time;
    return function () {
        clearTimeout(time);
      time = setTimeout(() => {
        setOpenOverlay(false)
      }, 5000);
    }
  }
  
  const onClose = () => {
    console.log('Overlay closed')
    setOpenOverlay(false)
  }

  return (
    <>
      <Overlay beer={beer} openOverlay={openOverlay} onClose={onClose}/>
      <div className="container">
        {
          beers.map((beer) => (
            <div className="card" key={beer.id} onClick={() => handleBeerClick(beer)}>
              <h2>{beer.name}</h2>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Beers;
