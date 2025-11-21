import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
import CardDeck from './lib/CardDeck'


let  cardDeck = new CardDeck();

console.log(cardDeck);

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='playingCards faceImages'>
      <Card/>
     </div>

    </>
  )
}

export default App
