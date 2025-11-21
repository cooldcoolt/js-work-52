class Card {
    name:string
    suit: string;
    rank: string|number;


    constructor(name:string, suit: string, rank: string|number) {
        this.name = name;
        this.suit = suit;
        this.rank = rank;
    }
}

export default Card;
