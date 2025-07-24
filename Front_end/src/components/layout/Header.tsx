import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import menu from '@/assets/icons/menu.png';

interface HeaderProps {
  onMenuClick: () => void;
  isSideNavOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSideNavOpen }) => {
  return (
    <header className="main_hd">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* isSideNavOpen이 false일 때만 메뉴 아이콘 전체 nav.menu 렌더링 */}
      {!isSideNavOpen && (
        <nav className="menu">
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
        </nav>
      )}
    </header>
  );
};

export default Header;
