import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
