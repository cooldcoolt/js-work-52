

const ranksArray: (string | number)[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];


const suitsArray = {
'diams': '♦️',
'clubs': '♥️',
'hearts': '♣️', 
'spades' : '♠️'

};


const Card: React.FC = ({rank, suit}) => {
  return (
    <span className="card rank-k diams">
      <span className="rank">K</span>
      <span className="suit">♦️</span>
    </span>
  );
};

export default Card;
