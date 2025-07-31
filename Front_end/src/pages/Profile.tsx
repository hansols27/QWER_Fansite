import React, { useState } from 'react';
import { members } from '@/data/members';
import '@/ui/profile.css';

export default function Profile() {
  const [activeId, setActiveId] = useState(members[0].id);
  const activeMember = members.find((member) => member.id === activeId);

  return (
    <div id="wrap">
      {/* 오른쪽 텍스트 */}
      <div id="side">
        <div className="side2">
          01
          <span className="s_line"></span>
          PROFILE
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="container">
        <div className="cont profile">
          {/* 좌측 멤버 리스트 */}
          <div className="member_name">
            {members.map((member) => (
              <p key={member.id}>
                <a
                  href="#"
                  className={activeId === member.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveId(member.id);
                  }}
                >
                  {member.name}
                </a>
              </p>
            ))}
          </div>

          {/* 우측 프로필 정보 */}
          {activeMember && (
            <div className="pf_inner">
              <div className="profile_img">
                {/* ID에 따른 배경 div 클래스 */}
                {activeMember.id !== 'All' && (
                  <div className={`color_bg bg-${activeMember.id}`} />
                )}

                <div
                  className={`artist_img ${
                    activeMember.id === 'All' ? 'show-shadow' : ''
                  }`}
                >
                  <img
                    src={activeMember.img}
                    alt={activeMember.name}
                    width={455}
                    height={580}
                  />
                </div>
              </div>

              <div className="profile_txt">
                <div className="name_tt">{activeMember.name}</div>
                <div>
                  이름 : {activeMember.koreanName}
                  <br />
                  생년월일 : {activeMember.birth}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
