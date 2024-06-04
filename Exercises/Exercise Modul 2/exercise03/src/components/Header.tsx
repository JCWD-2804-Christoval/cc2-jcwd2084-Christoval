import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="profile-pic.png" alt="Profile" className="profile-pic" />
        <div className="intro">
          <h1>Hello!</h1>
          <h2>I'm Radya Christoval, a web developer.</h2>
          <button>View More</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
