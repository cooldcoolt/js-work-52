import Card from "./Card";
import { getRnumber } from "../utils";

interface Suits {
  name: string;
  value: string;
}

class CardDeck {
  cards: Card[] = [];

  _suits: Suits[] = [
    { name: "diams", value: "♦️" },
    { name: "hearts", value: "♥️" },
    { name: "clubs", value: "♣️" },
    { name: "spades", value: "♠️" },
  ];

  _ranks: (string | number)[] = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    "J",
    "Q",
    "K",
    "A",
  ];


  constructor() {
    for (let i = 0; i < this._ranks.length; i++) {
      for (let j = 0; j < this._suits.length; j++) {
        this.cards.push(new Card(this._suits[j].name, this._suits[j].value, this._ranks[i]));
      }
    }

    this._shuffle();
  }

  getCard(): Card {
    const ind = getRnumber(0, this.cards.length);
    let card: Card = this.cards[ind];
    this.cards.splice(ind, 1);
    return card;
  }

  getCards(cuant: number): Card[] {
    let chosen: Card[] = [];
    for (let i = 0; i < cuant; i++) {
      chosen.push(this.getCard());
    }

    return chosen;
  }

  _shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

export default CardDeck;
