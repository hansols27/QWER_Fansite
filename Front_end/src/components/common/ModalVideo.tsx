import React, { useEffect, useRef } from 'react';

interface ModalVideoProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  channel?: 'youtube' | 'vimeo' | 'facebook';
  ratio?: string; // e.g., "16:9"
  allowFullScreen?: boolean;
}

const getPadding = (ratio = '16:9') => {
  const [w, h] = ratio.split(':').map(Number);
  return `${(h / w) * 100}%`;
};

const getYoutubeUrl = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`;

const getVimeoUrl = (videoId: string) =>
  `https://player.vimeo.com/video/${videoId}?autoplay=1`;

const getFacebookUrl = (videoId: string) =>
  `https://www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/${videoId}&autoplay=1`;

const getVideoUrl = (channel: string, videoId: string) => {
  switch (channel) {
    case 'youtube':
      return getYoutubeUrl(videoId);
    case 'vimeo':
      return getVimeoUrl(videoId);
    case 'facebook':
      return getFacebookUrl(videoId);
    default:
      return '';
  }
};

export const ModalVideo: React.FC<ModalVideoProps> = ({
  isOpen,
  onClose,
  videoId,
  channel = 'youtube',
  ratio = '16:9',
  allowFullScreen = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-label="You just opened the modal video"
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          modalRef.current?.focus();
        }
      }}
    >
      <div
        className="relative bg-black rounded overflow-hidden"
        style={{ width: '90%', maxWidth: '960px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: 'relative', paddingBottom: getPadding(ratio) }}>
          <button
            className="absolute top-2 right-2 z-10 text-white"
            onClick={onClose}
            aria-label="Close the modal"
          >
            ✕
          </button>
          <iframe
            src={getVideoUrl(channel, videoId)}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen={allowFullScreen}
            className="absolute inset-0 w-full h-full"
            title="Video Modal"
          />
        </div>
      </div>
    </div>
  );
};
