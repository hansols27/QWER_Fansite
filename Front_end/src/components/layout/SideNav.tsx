import React from 'react';
import logo from '@/assets/images/logo.svg';
import close from '@/assets/icons/close.png';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <nav className="gnb open" aria-label="사이드 네비게이션">
      <div className="gnb-header">
        <button
          className="menu_close"
          onClick={onClose}
          type="button"
          aria-label="사이드메뉴 닫기"
        >
          <img src={close} alt="닫기 아이콘" />
        </button>

        <div className="logo">
          <a href="/">
            <img src={logo} alt="사이트 로고" />
          </a>
        </div>
      </div>

      <ul className="gnb_list">
        <li><a href="/Default/Profile">PROFILE</a></li>
        <li><a href="/Default/DiscographyList">DISCOGRAPHY</a></li>
        <li><a href="/Default/Gallery">GALLERY</a></li>
        <li><a href="/Default/Video">VIDEO</a></li>
        <li><a href="/Default/NoticeList">NOTICE</a></li>
        <li><a href="/Default/Schedule">SCHEDULE</a></li>
      </ul>
    </nav>
  );
};

export default SideNav;
