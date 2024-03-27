import React from "react";
import nbaLogo from "../assets/nba-logo.png";

function LogoComponent() {
  return (
    <div>
      <img src={nbaLogo} alt="NBA Logo" className="nba-logo" />
      <h1 className="title">NBA Legends</h1>
      <input type="search" placeholder="Enter Player Name..." className="input"/>
    </div>
  );
}

export default LogoComponent;
