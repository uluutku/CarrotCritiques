import React from "react";
import "./Header.css"; // Import your custom CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🥕</h1>
          <h1>Carrot Critiques</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Ana Sayfa</a>
            </li>
            <li>
              <a href="#reviews">Restoranlar</a>
            </li>
            <li>
              <a href="#about">Hakkında</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
