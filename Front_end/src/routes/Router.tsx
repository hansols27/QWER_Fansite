import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Footer from '@/components/layout/Footer';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
