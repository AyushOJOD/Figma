const Card = ({ title, backgroundColor }) => {
  return (
    <div className="flex justify-center">
      <button style={{ backgroundColor }}>{title}</button>
    </div>
  );
};

export default Card;
