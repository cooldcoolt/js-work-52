
import type { CardType } from "./CardType";

import { FLESH_ROYAL, STRAILT_FLASH, STAIGHT } from "../Utils";

export const analizeHand = (cards: CardType[]): string => {

  switch (true) {
    case _isItFlashRoyal(cards):
      return "Рояль-Флеш!";

    case _isItStraitFlush(cards):
      return "Стрит-Флеш!";

    case _isItKare(cards):
      return "Каре!";

    case _isItFullHouse(cards):
      return "Фул Хаус!";

    case _isItFlush(cards):
      return "Флэш!";

    case _isItStraight(cards):
      return "Стрит!";

    case _isItTroyka(cards):
      return "Тройка!";

    case _isItDvoika(cards):
      return "Двойка!";

    case _isItOdnaPara(cards):
      return "Одна пара!";

    default:
      return "Нет комбинации";
  }
};



const _isItFlashRoyal = (cards: CardType[]): boolean => {
  const suit = cards[0].suit;
  

  const ass = cards.every((card) => card.suit === suit);
  if (!ass) return false;

  const ranks = cards.map((card) => card.rank);
  return FLESH_ROYAL.every((rank) => ranks.includes(rank));
};

const _isItStraitFlush = (cards: CardType[]): boolean => {
  const suit = cards[0].suit;
  const ass = cards.every((card) => card.suit === suit);
  if (!ass) return false;

  const ranks = cards.map((card) => card.rank);
  return STRAILT_FLASH.every((rank) => ranks.includes(rank));
};

const _isItKare = (cards: CardType[]): boolean => {
  let kareMap = new Map<string, number>();

  cards.forEach((c) => {
    let mp = kareMap.get(c.rank);
    let count = mp === undefined ? 0 : mp;
    kareMap.set(c.rank, count + 1);
  });

  for (let count of kareMap.values()) {
    if (count === 4) {
      return true;
    }
  }

  return false;
};

const _isItFullHouse = (cards: CardType[]): boolean => {
  let kareMap = new Map<string, number>();

  cards.forEach((c) => {
    let mp = kareMap.get(c.rank);
    let count = mp === undefined ? 0 : mp;
    kareMap.set(c.rank, count + 1);
  });

  let has3 = false;
  let has2 = false;

  for (let count of kareMap.values()) {
    if (count === 3) {
      has3 = true;
    }
    if (count === 2) {
      has2 = true;
    }
  }

  return has3 && has2;
};

const _isItFlush = (cards: CardType[]): boolean => {
   
    const suit = cards[0].suit;
  return cards.every((c) => c.suit === suit);
};

const _isItStraight = (card: CardType[]): boolean => {
  let cardSet = Array.from(new Set(card.map((c) => c.rank)));

  if (cardSet.length != 5) {
    return false;
  }

  let hasAll = cardSet.every((it) => STAIGHT.includes(it));
  return hasAll;
};

const _isItTroyka = (card: CardType[]): boolean => {
  let kareMap = new Map<string, number>();

  card.forEach((c) => {
    let mp = kareMap.get(c.rank);
    let count = mp === undefined ? 0 : mp;
    kareMap.set(c.rank, count + 1);
  });

  for (let count of kareMap.values()) {
    if (count === 3) {
      return true;
    }
  }

  return false;
};

const _isItDvoika = (card: CardType[]): boolean => {
  let kareMap = new Map<string, number>();

  card.forEach((c) => {
    let mp = kareMap.get(c.rank);
    let count = mp === undefined ? 0 : mp;
    kareMap.set(c.rank, count + 1);
  });

  let dvoyka = 0;
  for (let count of kareMap.values()) {
    if (count === 2) {
      dvoyka++;
    }
  }

  return dvoyka === 2;
};

const _isItOdnaPara = (card: CardType[]): boolean => {
  let kareMap = new Map<string, number>();

  card.forEach((c) => {
    let mp = kareMap.get(c.rank);
    let count = mp === undefined ? 0 : mp;
    kareMap.set(c.rank, count + 1);
  });

  for (let count of kareMap.values()) {
    if (count === 2) {
      return true;
    }
  }

  return false;
};

export default analizeHand;