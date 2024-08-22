import React from 'react';
import logo from './img/logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          <li>그룹소개</li>
          <li>사업분야</li>
          <li>뉴스룸</li>
          <li>지속가능경영</li>
          <li>인재채용</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;