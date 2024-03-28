import nbaLogo from "../assets/nba-logo.png";
import PlayerCard from "./PlayerCard";
import { data } from "../helper/data";
import { useState } from "react";

function LogoComponent() {
  const [filteredData, setFilteredData] = useState(data);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setFilteredData(filtered);
  };



  return (
    <>
      <div>
        <img src={nbaLogo} alt="NBA Logo" className="nba-logo" />
        <h1 className="title">NBA Legends</h1>
        <input
          type="search"
          placeholder="Search a player name..."
          className="input"
          onChange={handleChange}
        />
      </div>
      <div className="card-container">
        <div className="not-found">
          {filteredData.length === 0 && "Player not Found!!!"}
        </div>
        {filteredData.map((player) => (
          <PlayerCard key={player.id} data={player} />
        ))}
      </div>
    </>
  );
}

export default LogoComponent;
