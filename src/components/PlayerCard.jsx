import { useState } from "react";

const PlayerCard = ({ data }) => {
  const [property, setProperty] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleEvent = () => {
    setProperty(data.statistics);
    setToggle(!toggle);
  };
  console.log(data);
  return (
    <div
      className={toggle ? "card" : "card-click-container"}
      onClick={handleEvent}
    >
      <img src={data.img} alt="" className={toggle ? "card-img" : "statistics-img"} />
      <div className={toggle ? "card-name" : "card-ul"}>
        {toggle ? data.name : property.map((item) => <li>{item}</li>)}
      </div>
    </div>
  );
};

export default PlayerCard;
