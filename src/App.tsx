
import { useState } from 'react';
import './App.css';
import Card from './card';
import CardDeck from './lib/CardDeck';
import {analizeHand} from './lib/PokerHand';
import type { CardType } from "./lib/CardType";



const cardDeck = new CardDeck();

const App = () => {

  const [cards, setCards] = useState<CardType[]>([]);

  const [result, setResult] = useState<string>("");
  
  const getCards = () => {
    const newCards = cardDeck.getCards(5) as CardType[]; 
    setCards(newCards);
    setResult(analizeHand(newCards));
  };


  return (
    <>
      <section className="gamesec">
        <button className="razdat" onClick={getCards}>
          Раздать
        </button>

        <div>
        <h1>{result}</h1>
        </div>

        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit} name={card.name} />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;

