import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { socialLinks } from '@/constants/snsLinks';
import { openInNewTab } from '@/utils/openInNewTab';

export const Router = () => (
  <div id="wrap">
    <BrowserRouter>
      {/* 헤더, 사이드 네비게이션 */}
      <Header />

      {/* SNS 메뉴 */}
      <aside className="sns-menu">
        <ul>
          {socialLinks.map(({ id, icon, url, type }) => (
            <li
              key={id}
              className={type || ''}
              onClick={() => openInNewTab(url)}
              title={id}
              style={{ cursor: 'pointer' }}
            >
              <img src={icon} alt={`${id} 아이콘`} width={32} height={32} />
            </li>
          ))}
        </ul>
      </aside>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </div>
);
