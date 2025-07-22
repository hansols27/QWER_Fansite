// src/components/YouTubeEmbed.tsx
import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  width = 360,
  height = 160,
}) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTubeEmbed;
