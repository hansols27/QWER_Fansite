import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import SideNav from '@/components/layout/SideNav';
import { socialLinks } from '@/constants/snsLinks';
import { openInNewTab } from '@/utils/openInNewTab';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videoIds } from '@/data/videoIds';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleMenuOpen = () => setIsSideNavOpen(true);
  const handleMenuClose = () => setIsSideNavOpen(false);

  return (
    <div id="wrap" className="main_wrap">
      {/* 헤더에 상태와 핸들러 전달 */}
      <Header onMenuClick={handleMenuOpen} isSideNavOpen={isSideNavOpen} />

      {/* 사이드 네비게이션 */}
      <SideNav isOpen={isSideNavOpen} onClose={handleMenuClose} />

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

      {/* 유튜브 영상 및 썸네일 */}
      <main id="youtube-section">
        <section className="youtube-container">
          <div className="youtube-main-video">
            <YouTubeEmbed videoId={videoIds[selectedIndex]} width="100%" />
          </div>

          <div className="youtube-thumbnails">
            <Swiper spaceBetween={20} slidesPerView={4}>
              {videoIds.map((id, idx) => (
                <SwiperSlide key={`${id}-${idx}`}>
                  <div
                    className={`youtube-thumbnail ${idx === selectedIndex ? 'active' : ''}`}
                    onClick={() => setSelectedIndex(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                      alt={`Video thumbnail ${idx + 1}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
