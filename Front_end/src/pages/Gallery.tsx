import React, { useState } from "react";
import "@/ui/gallery.css";
import btn_prev from "@/assets/icons/bg-btn-prev.png";
import btn_next from "@/assets/icons/bg-btn-next.png";

interface GalleryItem {
  id: number;
  href: string;
  src: string;
  alt: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    href: "https://lv2-cdn.azureedge.net/day6/cf3adb18c30e4dc1950c201e3a72c20e-18.jpg",
    src: "https://lv2-cdn.azureedge.net/day6/5fd06e1a043b49869773966b04822527-1820250507053031958.jpg",
    alt: "5fd06e1a043b49869773966b04822527-1820250507053031958.jpg",
  },
  {
    id: 2,
    href: "https://lv2-cdn.azureedge.net/day6/6fff291badee49d4b905884584fa6711-17.jpg",
    src: "https://lv2-cdn.azureedge.net/day6/c68e619cf3ec403eb2c9af3c740a18cd-1720250507053030973.jpg",
    alt: "c68e619cf3ec403eb2c9af3c740a18cd-1720250507053030973.jpg",
  },
  {
    id: 3,
    href: "https://lv2-cdn.azureedge.net/day6/a4e92feb1cb14c06a4bcf6a1c5d93757-16.jpg",
    src: "https://lv2-cdn.azureedge.net/day6/18ac9bacacd24c0db0e9240ac97c24e7-1620250507053030036.jpg",
    alt: "18ac9bacacd24c0db0e9240ac97c24e7-1620250507053030036.jpg",
  },
  // ... 나머지 이미지 데이터 동일한 형식으로 추가
];

export default function Gallery() {
  const [page, setPage] = useState(1);
  const totalPages = 18; // HTML에 있던 총 페이지 수

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

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
      <div className="cont gallery">
        {/* Gallery List */}
        <div className="galleryList">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryData.map((item) => (
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

        {/* Pagination */}
        <div className="page-btn-box nt_bt">
          <button
            type="button"
            className="prev-btn"
            onClick={handlePrev}
            disabled={page === 1}
          >
            <img alt="이전" src={btn_prev} />
            이전
          </button>
          <span className="page-number">
            <strong>{page}</strong> / <em>{totalPages}</em>
          </span>
          <button
            type="button"
            className="next-btn"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            <img alt="이후" src={btn_next} />
            이후
          </button>
        </div>
      </div>
    </div>
  );
}
