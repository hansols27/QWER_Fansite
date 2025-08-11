import React, { useState } from "react";
import "@/ui/community.css";
import btn_prev from '@/assets/icons/bg-btn-prev.png';
import btn_next from '@/assets/icons/bg-btn-next.png';

interface NoticeItem {
  id: number;
  category: string;
  title: string;
  date: string;
  link: string;
}

const noticeData: NoticeItem[] = [
  {
    id: 6792,
    category: "619",
    title: "DAY6(데이식스) 가장 선명했던 하루의, Beautiful Feeling",
    date: "2025-08-10",
    link: "/Default/NoticeView?AnSeq=6792&PgIndex=0",
  },
  {
    id: 6791,
    category: "618",
    title: "DAY6(데이식스) 돌이켜 보면 참 좋았던 시간 모두, 행복했던 날들이었다",
    date: "2025-08-10",
    link: "/Default/NoticeView?AnSeq=6791&PgIndex=0",
  },
  {
    id: 6789,
    category: "617",
    title: "DAY6(데이식스) 열두 개의 계절, 예뻤어",
    date: "2025-08-09",
    link: "/Default/NoticeView?AnSeq=6789&PgIndex=0",
  },
  {
    id: 6788,
    category: "616",
    title: "DAY6(데이식스) 우리의 시작, Congratulations",
    date: "2025-08-09",
    link: "/Default/NoticeView?AnSeq=6788&PgIndex=0",
  },
  {
    id: 6790,
    category: "615",
    title: "DAY6(데이식스) 우리가 서로를 알게 된 순간, My Day",
    date: "2025-08-09",
    link: "/Default/NoticeView?AnSeq=6790&PgIndex=0",
  },
  {
    id: 6766,
    category: "614",
    title: "DAY6(데이식스) 10th Anniversary Announcement : The DECADE of us",
    date: "2025-08-04",
    link: "/Default/NoticeView?AnSeq=6766&PgIndex=0",
  },
  {
    id: 6755,
    category: "613",
    title: 'Young K (DAY6) – 10CM (십센치) "Into Your Summer" 참여 안내',
    date: "2025-07-30",
    link: "/Default/NoticeView?AnSeq=6755&PgIndex=0",
  },
  {
    id: 6631,
    category: "612",
    title:
      'Young K (DAY6) - 하하 (HAHA) "Sunny Day (Feat. Young K (DAY6))" 참여 안내',
    date: "2025-06-13",
    link: "/Default/NoticeView?AnSeq=6631&PgIndex=0",
  },
  {
    id: 6605,
    category: "611",
    title: 'Young K (DAY6) - JTBC <굿보이> OST Part.2 "나무가 될게" 참여 안내',
    date: "2025-06-08",
    link: "/Default/NoticeView?AnSeq=6605&PgIndex=0",
  },
  {
    id: 6602,
    category: "610",
    title: "HAPPY 8TH BIRTHDAY, My Day",
    date: "2025-06-07",
    link: "/Default/NoticeView?AnSeq=6602&PgIndex=0",
  },
];

export default function Community() {
  const [page, setPage] = useState(1);
  const totalPages = 62;

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          06
          <span className="s_line"></span>
          COMMUNITY
        </div>
      </div>

      {/* Main */}
      <div className="cont community">
        {/* Community List */}
        <div className="communityList">
          <ul>
            {noticeData.map((community) => (
              <li key={community.id}>
                <a href={community.link}>
                  <p className="cate">{community.category}</p>
                  <p className="nc_in">
                    <span className="tit">{community.title}</span>
                    <span className="date">{community.date}</span>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="page-btn-box nt_bt">
          <div className="page-btn-box">
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
    </div>
  );
}
