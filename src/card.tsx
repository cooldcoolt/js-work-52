


interface CardProps {
  rank: string;
  suit: string;
  name: string;
}

const Card: React.FC<CardProps> = ({rank, suit, name }) => {
  let low = isNaN(Number(rank)) ? rank.toLowerCase() : rank;
  return (
  <span className={"card rank-" + low + " " + name}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default Card;


    // <span className="card rank-k diams"></span>

