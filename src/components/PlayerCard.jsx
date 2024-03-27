import { useState } from "react";


const PlayerCard = ({ data }) => {


  const [property, setProperty] = useState(data.statistics);
  const [toggle, setToggle] = useState(true);

  const handleEvent = () => {
    setToggle(!toggle)
    return setProperty(property => property.statistics )
  }
  
  console.log(data);
  return (
    <div className="card" onClick={handleEvent}>



<p>{property}</p>

      <img src={data.img} alt="" className="card-img" />
      <p className="card-name">{data.name}</p>
    </div>
  );
};

export default PlayerCard;
