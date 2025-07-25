import React, { useState } from 'react';
import YouTubeEmbed from '@/components/common/YouTubeEmbed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { videoIds } from '@/data/videoIds';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {/* 유튜브 영상 및 썸네일 */}
      <main id="main-content">
        <section className="youtube-section">
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
    </>
  );
};

export default Home;
