import React, { useState } from "react";
import "@/ui/gallery.css";
import { gallery } from "@/data/gallerylist";

import btn_prev from "@/assets/icons/bg-btn-prev.png";
import btn_next from "@/assets/icons/bg-btn-next.png";

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = gallery.slice(startIndex, startIndex + itemsPerPage);

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
        <div className="title">GALLERY</div>

        {/* 이미지 목록 */}
        <div className="galleryList">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {currentImages.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  data-fancybox="gallery"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 페이지 버튼 */}
        <div className="page-btn-box nt_bt">
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
      </div>
  );
}
