import React, { useState, useRef } from 'react';
import '@/ui/viedo.css';
import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';

interface VideoItem {
  id: string;
  src: string;
  title: string;
  date: string;
  thumb: string;
}

const videos: VideoItem[] = [
  {
    id: '279',
    src: 'https://www.youtube.com/embed/0fyZqS0N19o',
    title: 'Maybe Tomorrow M/V',
    date: '2025-05-07',
    thumb: 'https://i.ytimg.com/vi/0fyZqS0N19o/sddefault.jpg',
  },
  {
    id: '271',
    src: 'https://www.youtube.com/embed/3qcX_kz84bo',
    title: 'Check Pattern M/V',
    date: '2024-11-05',
    thumb: 'https://i.ytimg.com/vi/3qcX_kz84bo/sddefault.jpg',
  },
  {
    id: '264',
    src: 'https://www.youtube.com/embed/yss4rIrHl6o',
    title: '녹아내려요 M/V',
    date: '2024-09-02',
    thumb: 'https://i.ytimg.com/vi/yss4rIrHl6o/sddefault.jpg',
  },
];

export default function Video() {
  const [activeVideo, setActiveVideo] = useState<string>('279');
  const iframeRefs = useRef<Record<string, HTMLIFrameElement | null>>({});

  // iframe 새로고침 함수
  const reloadVideos = () => {
    Object.keys(iframeRefs.current).forEach((id) => {
      const iframe = iframeRefs.current[id];
      if (iframe) {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
      }
    });
  };

  // 탭 클릭 시 실행
  const handleTab = (id: string) => {
    setActiveVideo(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    reloadVideos();
  };

  return (
    <div id="wrap">
      {/* side */}
      <div id="side">
        <div className="side2">
          04
          <span className="s_line"></span>
          VIDEO
        </div>
      </div>

      {/* container */}
      <div className="container">
        <div className="cont video_ct">
          <div className="title v_tt">VIDEO</div>

          <div className="video_list">
            {videos.map((video) => (
              <div
                key={video.id}
                className="select_video"
                style={{
                  display: activeVideo === video.id ? 'block' : 'none',
                }}
              >
                <iframe
                  ref={(el) => {
                    iframeRefs.current[video.id] = el; // 반환값 없음 → 타입 에러 해결
                  }}
                  width="861"
                  height="484"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <div className="new_release_list vd_list">
            {videos.map((video) => (
              <div className="new_video_cont" key={video.id}>
                <button onClick={() => handleTab(video.id)}>
                  <div className="img">
                    <img alt={video.title} src={video.thumb} />
                    <div className="list-hover">
                      <p className="play_bt">
                        <svg
                          viewBox="0 0 191.5 191.5"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M95.8 191.5c-52.8 0-95.8-42.9-95.8-95.7s43-95.8 95.8-95.8 95.8 43 95.8 95.8-43 95.7-95.8 95.7zm0-188c-50.9 0-92.3 41.4-92.3 92.3s41.4 92.2 92.3 92.2 92.2-41.4 92.2-92.2-41.4-92.3-92.2-92.3zM92.6 81l22.6 14.8-22.6 14.7"></path>
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div className="txt">
                    <p>
                      {video.title}
                      <span>{video.date}</span>
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* page */}
          <div className="page-btn-box">
            <button type="button" className="prev-btn" data-page="0">
              <img alt="이전" src={btn_prev} />
              이전
            </button>
            <span className="page-number">
              <strong>1</strong> / <em>11</em>
            </span>
            <button type="button" className="next-btn" data-page="2">
              <img alt="이후" src={btn_next} />
              이후
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
