import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
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
        </Routes>
      </main>

      {/* 푸터 */}
      <Footer />
    </BrowserRouter>
  </div>
);
