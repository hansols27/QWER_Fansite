import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: string | number;
  height?: string | number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = '100%',
  height = 640,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        maxWidth: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        margin: '0 auto',
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          borderRadius: 12,
          display: 'block',
        }}
      />
    </div>
  );
};

export default YouTubeEmbed;
