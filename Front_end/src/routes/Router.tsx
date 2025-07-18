import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home/Home';
/*import { Profile } from '@/pages/Profile/Profile';
import { Music } from '@/pages/Music/Music';
import { Schedule } from '@/pages/Schedule/Schedule';
import { News } from '@/pages/News/News';
import { Video } from '@/pages/Video/Video';
import { SNS } from '@/pages/SNS/SNS';*/
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
/*export const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/music" element={<Music />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/news" element={<News />} />
      <Route path="/video" element={<Video />} />
      <Route path="/sns" element={<SNS />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);*/
