import { useState } from 'react';
import '../styles/SideNav.css';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="wrap" className={isOpen ? 'gnb_on' : ''}>
      <button onClick={() => setIsOpen(true)}>Open Nav</button>
      <button onClick={() => setIsOpen(false)}>Close Nav</button>

      <div
        id="mySidenav"
        style={{ height: isOpen ? '100%' : '0' }}
        className="sidenav"
      >
        <ul className="gnb_list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
