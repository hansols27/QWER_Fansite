import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Discography" element={<Discography />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </main>

      {/* 푸터 */}
      <Footer />
    </BrowserRouter>
  </div>
);
