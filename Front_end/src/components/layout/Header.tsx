import React from 'react';
import logo from '@/assets/images/logo.svg';
import menu from '@/assets/icons/menu.png';

const Header: React.FC = () => {
  return (
    <header className="main_hd">
      <div className="logo">
        {/* 로고 이미지 */}
        <img src={logo} alt="Logo" />
      </div>
      <nav className="menu">
        {/* 메뉴 아이콘 */}
        <img src={menu} alt="Menu" />
      </nav>
    </header>
  );
};

export default Header;
