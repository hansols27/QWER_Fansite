import React, { useState } from 'react';
import '@/ui/gallery.css';
import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';

interface GalleryImage {
  href: string;
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    href: 'https://lv2-cdn.azureedge.net/day6/cf3adb18c30e4dc1950c201e3a72c20e-18.jpg',
    src: 'https://lv2-cdn.azureedge.net/day6/5fd06e1a043b49869773966b04822527-1820250507053031958.jpg',
    alt: '5fd06e1a043b49869773966b04822527-1820250507053031958.jpg',
  },
  {
    href: 'https://lv2-cdn.azureedge.net/day6/6fff291badee49d4b905884584fa6711-17.jpg',
    src: 'https://lv2-cdn.azureedge.net/day6/c68e619cf3ec403eb2c9af3c740a18cd-1720250507053030973.jpg',
    alt: 'c68e619cf3ec403eb2c9af3c740a18cd-1720250507053030973.jpg',
  },
];

export default function Gallery() {
  return (
    <div id="wrap" className="bg-black text-white">
      {/* 사이드 */}
      <div id="side" className="p-4">
        <div className="side2">
          03
          <span className="s_line"></span>
          GALLERY
        </div>
      </div>

      {/* 컨테이너 */}
      <div className="container p-4">
        <div className="cont gallery">
          <div className="title text-2xl font-bold mb-4">GALLERY</div>

          <div className="gallery_list">
            <div className="cutimg">
              <div className="layout">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {galleryImages.map((img, idx) => (
                    <a
                      key={idx}
                      className="grid-item"
                      href={img.href}
                      data-fancybox="gallery"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-auto object-cover"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 페이지 버튼 */}
            <div className="page-btn-box flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                className="prev-btn flex items-center gap-2"
              >
                <img alt="이전" src={btn_prev} />
                이전
              </button>
              <span className="page-number">
                <strong>1</strong> / <em>18</em>
              </span>
              <a href="/Default/Gallery?PgIndex=2&AmSeq=1" className="img">
                <button
                  type="button"
                  className="next-btn flex items-center gap-2"
                >
                  <img alt="이후" src={btn_next} />
                  이후
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
