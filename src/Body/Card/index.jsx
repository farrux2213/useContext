const Card = ({ title, id }) => {
  return <div key={id}> {title}</div>;
};

export default Card;
