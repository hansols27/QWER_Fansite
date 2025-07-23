import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import menu from '@/assets/icons/menu.png';

interface HeaderProps {
  onMenuClick: () => void;
  isSideNavOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSideNavOpen }) => (
  <header className="main_hd">
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
    <nav className="menu">
      {!isSideNavOpen && (
        <img
          src={menu}
          alt="Menu"
          onClick={onMenuClick}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onMenuClick();
            }
          }}
        />
      )}
    </nav>
  </header>
);

export default Header;
