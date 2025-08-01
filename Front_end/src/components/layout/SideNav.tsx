import React from 'react';
import close from '@/assets/icons/close.png';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <nav className="gnb open" aria-label="사이드 네비게이션">
      <div className="gnb">
        <button
          className="menu_close"
          onClick={onClose}
          type="button"
          aria-label="사이드메뉴 닫기"
        >
          <img src={close} alt="닫기 아이콘" />
        </button>
      </div>

      <ul className="gnb_list">
        <li>
          <a href="/Profile">PROFILE</a>
        </li>
        <li>
          <a href="/Discography">DISCOGRAPHY</a>
        </li>
        <li>
          <a href="/Gallery">GALLERY</a>
        </li>
        <li>
          <a href="/Video">VIDEO</a>
        </li>
        <li>
          <a href="/Notice">NOTICE</a>
        </li>
        <li>
          <a href="/Schedule">SCHEDULE</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
