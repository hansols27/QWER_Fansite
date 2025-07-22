import React from 'react';
import logo from '@/assets/images/logo.svg';
import close from '@/assets/icons/close.png';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  return (
    <nav
      id="mySidenav"
      className="gnb"
      style={{ height: isOpen ? '100%' : '0', transition: 'height 0.3s ease' }}
    >
      <div className="logo">
        <a href="/">
          <img src={logo} alt="로고" />
        </a>
      </div>
      <button className="ham_menu_close" onClick={onClose} type="button" />
      <img src={close} alt="닫기" />

      <ul className="gnb_list">
        <li>
          <a href="/Default/Profile">PROFILE</a>
        </li>
        <li>
          <a href="/Default/DiscographyList">DISCOGRAPHY</a>
        </li>
        <li>
          <a href="/Default/Gallery">GALLERY</a>
        </li>
        <li>
          <a href="/Default/Video">VIDEO</a>
        </li>
        <li>
          <a href="/Default/NoticeList">NOTICE</a>
        </li>
        <li>
          <a href="/Default/Schedule">SCHEDULE</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
