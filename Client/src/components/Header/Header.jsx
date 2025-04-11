import { useState } from "react";
import "./Header.css";
import gameImage from "../../images/game.jpg";
import humanImage from "../../images/human.jpg";

function Header() {
  return (
    <header>
        <div className="header-icons">
          <a href="#" className="icon">
          <img src={gameImage} alt="Icon 1" />
          </a>
        </div>
      <div className="header-content fleur-de-leah-regular-header">
        <h1>Lol Maybe Play</h1>
      </div>
      <div className="header-icons">
          <a href="#" className="icon">
            <img src={humanImage} alt="Icon 2" />
          </a>
        </div>
    </header>
  );
}

export default Header;
