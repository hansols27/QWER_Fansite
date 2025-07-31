import React, { useState } from 'react';
import { members } from '@/data/members';
import '@/ui/profile.css';

export default function Profile() {
  const [activeId, setActiveId] = useState(members[0].id);
  const activeMember = members.find((member) => member.id === activeId);

  return (
    <div className="container">
      <div className="cont profile">
        {/* 멤버 이름 리스트 */}
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

        {/* 프로필 정보 렌더링 */}
        {members.map((member) => (
          <div
            key={member.id}
            className="pf_inner"
            id={member.id}
            style={{ display: activeId === member.id ? 'block' : 'none' }}
          >
            <div className="profile_img">
              {/* ID 기반 배경 클래스 */}
              {member.id !== 'All' && (
                <div className={`color_bg bg-${member.id}`} />
              )}

              <div
                className={`artist_img ${
                  member.id === 'All' ? 'show-shadow' : ''
                }`}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  width={455}
                  height={580}
                />
              </div>
            </div>

            <div className="profile_txt">
              <div className="name_tt">{member.name}</div>
              <div>
                이름 : {member.koreanName}
                <br />
                생년월일 : {member.birth}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
