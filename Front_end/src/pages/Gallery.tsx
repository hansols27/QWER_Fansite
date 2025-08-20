import React, { useState } from 'react';
import '@/ui/gallery.css';
import { gallery } from '@/data/gallerylist';

import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function Gallery() {
  const itemsPerPage = 20;
  const totalPages = Math.ceil(gallery.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = gallery.slice(startIndex, startIndex + itemsPerPage);

  // Lightbox 상태
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const goPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          03
          <span className="s_line"></span>
          GALLERY
        </div>
      </div>

      {/* Main */}
      <div className="cont gallery wow fadeInUp" data-wow-delay="0.2s">
        <div className="title">GALLERY</div>

        {/* 이미지 목록 */}
        <div className="galleryList">
          <ul>
            {currentImages.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    setPhotoIndex(startIndex + index);
                    setIsOpen(true);
                  }}
                >
                  <img src={item.src} alt={item.alt} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="page-btn-box">
          <button
            type="button"
            className="prev-btn"
            onClick={goPrev}
            disabled={currentPage <= 1}
          >
            <img alt="이전" src={btn_prev} />
            이전
          </button>
          <span className="page-number">
            <strong>{currentPage}</strong> / <em>{totalPages}</em>
          </span>
          <button
            type="button"
            className="next-btn"
            onClick={goNext}
            disabled={currentPage >= totalPages}
          >
            <img alt="이후" src={btn_next} />
            이후
          </button>
        </div>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={gallery[photoIndex].src}
            nextSrc={gallery[(photoIndex + 1) % gallery.length].src}
            prevSrc={
              gallery[(photoIndex + gallery.length - 1) % gallery.length].src
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % gallery.length)
            }
          />
        )}
      </div>
    </div>
  );
}
