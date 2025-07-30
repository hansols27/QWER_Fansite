import React, { useState } from 'react';
import { members } from '@/data/members';
import '@/ui/profile.css';

export default function Profile() {
  const [activeId, setActiveId] = useState(members[0].id);
  const activeMember = members.find((member) => member.id === activeId);

  return (
    <div id="wrap">
      {/* Side */}
      <div id="side">
        <div className="side2">
          01
          <span className="s_line"></span>
          PROFILE
        </div>
      </div>

      {/* Main Container */}
      <main className="container">
        <div className="cont profile">
          {/* 좌측: 멤버 이름 리스트 */}
          <div className="member_name">
            {members.map((member) => (
              <p key={member.id}>
                <a
                  href="#"
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

          {/* 우측: 선택된 멤버 프로필 */}
          {activeMember && (
            <div className="pf_inner">
              <div className="profile_img">
                {/* id가 'all'이 아닐 때만 배경 표시 */}
                {activeMember.id !== 'all' && (
                  <div className="color_bg artist_crbg" />
                )}
                <div
                  className={`artist_img ${
                    activeMember.id === 'all' ? 'show-shadow' : ''
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
