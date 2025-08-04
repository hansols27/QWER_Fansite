import React from 'react';
import close from '@/assets/icons/close.png';
import { Link } from 'react-router-dom';

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
      </div>

      <ul className="gnb_list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Discography">Discography</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/Video">Video</Link>
        </li>
        <li>
          <Link to="/Schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/Notice">Notice</Link>
        </li>
        <li>
          <Link to="/Community">Community</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
