import React, { useState, useRef } from "react";
import "@/ui/video.css";

interface VideoItem {
  id: number;
  title: string;
  src: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "QWER Video 1",
    src: "https://www.youtube.com/embed/example1",
  },
  {
    id: 2,
    title: "QWER Video 2",
    src: "https://www.youtube.com/embed/example2",
  },
  {
    id: 3,
    title: "QWER Video 3",
    src: "https://www.youtube.com/embed/example3",
  },
];

export default function Video() {
  // iframe 참조를 저장하는 useRef (배열 형태)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  // 동영상 다시 로드 함수
  const reloadVideos = () => {
    iframeRefs.current.forEach((iframe) => {
      if (iframe) {
        const src = iframe.src;
        iframe.src = src; // 다시 로드
      }
    });
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="video-container">
      <h1>VIDEO</h1>

      <div className="video-list">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`video-item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <iframe
              ref={(el) => {
                iframeRefs.current[index] = el;
              }}
              width="560"
              height="315"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      <div className="video-controls">
        <button onClick={() => setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length)}>
          이전
        </button>
        <button onClick={reloadVideos}>다시 불러오기</button>
        <button onClick={() => setActiveIndex((prev) => (prev + 1) % videos.length)}>
          다음
        </button>
      </div>
    </div>
  );
}
