import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Discography from '@/pages/Discography';
import Gallery from '@/pages/Gallery';
import Video from '@/pages/Video';
import Schedule from '@/pages/Schedule';
import Notice from '@/pages/Notice';
import Community from '@/pages/Community';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export const Router = () => (
  <div id="wrap">
    <BrowserRouter>
      {/* 헤더, 사이드 네비게이션 */}
      <Header />

      <main id="main-content">
        <Routes>
          <nav>
            <ul>
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
        </Routes>
      </main>

      {/* 푸터 */}
      <Footer />
    </BrowserRouter>
  </div>
);
