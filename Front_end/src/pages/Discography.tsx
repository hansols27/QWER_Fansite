import React from 'react';
import { albums } from '@/data/album';
import '@/ui/discography.css';

import more_view from '@/assets/icons/more_view.png';
import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';

interface DiscographyProps {
  currentPage: number;
  totalPages: number;
}

const Discography: React.FC<DiscographyProps> = ({
  currentPage,
  totalPages,
}) => {
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
      <div className="cont discography_view wow fadeInUp" data-wow-delay="0.2s">
        <div className="title">DISCOGRAPHY</div>

        <div className="new_release_list">
          {albums.map((album, index) => (
            <div className="new_album_cont" key={index}>
              <a href={album.link}>
                <div className="img">
                  <img
                    alt={album.title}
                    src={album.imgUrl}
                    width={344}
                    height={344}
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

        <div className="page-btn-box">
          <button
            type="button"
            className="prev-btn"
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
            disabled={currentPage >= totalPages}
          >
            <img alt="이후" src={btn_next} />
            이후
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discography;
