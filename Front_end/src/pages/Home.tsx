import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { socialLinks } from '@/constants/snsLinks';
import { openInNewTab } from '@/utils/openInNewTab';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const videoIds = [
  'pifz9JH1Re8',
  'CGvqj7bzCVY',
  '8IMPpF2tIWI',
  '7qRCUAQ_XC8',
  'AlirzLFEHUI',
  'JFGRPgYeu38',
  'ImuWa3SJulY',
  'WGm2HmXeeR',
  'On6Pm4M-dQQ',
  'MPK7oP1--4',
  'WErehcuzF_g',
  'WErehcuzF_g',
];

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />

      <main style={{ width: '100%', maxWidth: 1440 }}>
        {/* SNS 영역 */}
        <ul
          className="sns_menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
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
              <img src={social.icon} alt={`${social.id} 아이콘`} />
            </li>
          ))}
        </ul>

        {/* 유튜브 영상 영역 */}
        <section style={{ width: '100%', marginBottom: 80 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <YouTubeEmbed
              videoId={videoIds[selectedIndex]}
              width={1440}
              height={640}
            />
          </div>

          <div style={{ width: 1440, margin: '0 auto' }}>
            <Swiper spaceBetween={20} slidesPerView={4}>
              {videoIds.map((id, idx) => (
                <SwiperSlide key={`${id}-${idx}`}>
                  <div
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      width: 340,
                      height: 190,
                      border:
                        idx === selectedIndex
                          ? '3px solid #007bff'
                          : '2px solid #ccc',
                      borderRadius: 8,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      boxSizing: 'border-box',
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
