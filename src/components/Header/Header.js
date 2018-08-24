import React from 'react';
import logo from './icons/owl.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <h1 className="logo__title">
            <img className="logo__icon" src={logo} alt="Logo" />
            DarkReads
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
