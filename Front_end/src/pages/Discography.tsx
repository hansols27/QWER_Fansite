import React, { useState } from 'react';
import { albums } from '@/data/albumlist';
import '@/ui/discography.css';

import more_view from '@/assets/icons/more_view.png';
import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';

export default function Discography() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalPages = Math.ceil(albums.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAlbums = albums.slice(startIndex, startIndex + itemsPerPage);

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          02
          <span className="s_line"></span>
          DISCOGRAPHY
        </div>
      </div>

      {/* Main */}
      <div className="cont discography_view wow fadeInUp" data-wow-delay="0.2s">
        <div className="title">DISCOGRAPHY</div>

        {/* 앨범 목록 */}
        <div className="release_list">
          {currentAlbums.map((album, index) => (
            <div className="album_cont" key={index}>
              <a href={album.link}>
                <div className="album_img">
                  <img
                    alt={album.title}
                    src={album.imgUrl}
                    width={300}
                    height={330}
                  />
                  <div className="list-hover">
                    <img alt="자세히보기" src={more_view} />
                  </div>
                </div>
                <div className="txt">
                  <p>
                    {album.title}
                    <span>{album.date}</span>
                  </p>
                </div>
              </a>
            </div>
          ))}
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
      </div>
    </div>
  );
}
