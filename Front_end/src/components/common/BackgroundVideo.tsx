import { useState } from 'react';

const BackgroundVideo = () => {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {showVideo ? (
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
          width="100%"
          height="100%"
          style={{ pointerEvents: 'none' }}
        />
      ) : (
        <img src="/fallback.jpg" alt="fallback" style={{ width: '100%', height: '100%' }} />
      )}

      <button onClick={() => setShowVideo(!showVideo)} style={{ position: 'absolute', top: 20, left: 20 }}>
        {showVideo ? 'Stop' : 'Play'}
      </button>
    </div>
  );
};

export default BackgroundVideo;
