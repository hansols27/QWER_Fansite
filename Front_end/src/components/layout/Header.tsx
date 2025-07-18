import { Link } from 'react-router-dom';

export const Header = () => (
  <header style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">HOME</Link>
    </nav>
  </header>
);
/*export const Header = () => (
  <header style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/schedule">SCHEDULE</Link>
      <Link to="/news">NEWS</Link>
      <Link to="/video">VIDEO</Link>
      <Link to="/sns">SNS</Link>
    </nav>
  </header>
);*/
