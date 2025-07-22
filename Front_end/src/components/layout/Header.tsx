import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import menu from '@/assets/icons/menu.png';

const Header: React.FC = () => {
  return (
    <header className="main_hd">
      <div className="logo">
        {/* 로고 이미지 */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="menu">
        {/* 메뉴 아이콘 */}
        <img src={menu} alt="Menu" />
      </nav>
    </header>
  );
};

export default Header;
