import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { socialLinks } from '@/constants/snsLinks';
import { openInNewTab } from '@/utils/openInNewTab';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videoIds } from '@/data/videoIds'; // 영상 ID 배열

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />

      <main
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          maxWidth: 1440,
          padding: '40px 20px',
          gap: 20,
          margin: '0 auto',
        }}
      >
        {/* SNS 영역 */}
        <aside>
          <ul
            className="sns_menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            {socialLinks.map((social) => (
              <li
                key={social.id}
                className={social.type || ''}
                onClick={() => openInNewTab(social.url)}
                title={social.id}
                style={{ cursor: 'pointer' }}
              >
                <img src={social.icon} alt={`${social.id} 아이콘`} width={32} height={32} />
              </li>
            ))}
          </ul>
        </aside>

        {/* 유튜브 영상 + 썸네일 영역 */}
        <section style={{ flex: 1 }}>
          {/* 큰 영상 영역 */}
          <div style={{ marginBottom: 40 }}>
            <YouTubeEmbed
              videoId={videoIds[selectedIndex]}
              width="100%"
              height={640}
            />
          </div>

          {/* 썸네일 스와이프 영역 */}
          <div>
            <Swiper spaceBetween={20} slidesPerView={4}>
              {videoIds.map((id, idx) => (
                <SwiperSlide key={`${id}-${idx}`}>
                  <div
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      width: '100%',
                      height: 190,
                      border:
                        idx === selectedIndex
                          ? '3px solid #007bff'
                          : '2px solid #ccc',
                      borderRadius: 8,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      boxSizing: 'border-box',
                      transition: 'border 0.2s ease',
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                      alt={`Video thumbnail ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
