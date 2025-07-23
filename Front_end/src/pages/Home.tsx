import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { socialLinks } from '@/constants/snsLinks';
import { openInNewTab } from '@/utils/openInNewTab';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videoIds } from '@/data/videoIds';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="wrap" className="main_wrap">
      <Header />

      {/* SNS 메뉴: #wrap 바로 아래, fixed 위치 */}
      <aside className="sns-menu">
        <ul>
          {socialLinks.map((social) => (
            <li
              key={social.id}
              className={social.type || ''}
              onClick={() => openInNewTab(social.url)}
              title={social.id}
            >
              <img src={social.icon} alt={`${social.id} 아이콘`} width={32} height={32} />
            </li>
          ))}
        </ul>
      </aside>

      {/* 유튜브 영상과 썸네일 영역 */}
      <main id="youtube-section">
        <section className="youtube-container">
          <div className="youtube-main-video">
            <YouTubeEmbed
              videoId={videoIds[selectedIndex]}
              width="100%"
            />
          </div>

          <div className="youtube-thumbnails">
            <Swiper spaceBetween={20} slidesPerView={4}>
              {videoIds.map((id, idx) => (
                <SwiperSlide key={`${id}-${idx}`}>
                  <div
                    className={`youtube-thumbnail ${idx === selectedIndex ? 'active' : ''}`}
                    onClick={() => setSelectedIndex(idx)}
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
