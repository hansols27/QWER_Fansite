import React, { useState } from 'react';
import { members } from '@/data/members'; 

export default function Profile() {
  const [activeId, setActiveId] = useState(members[0].id);

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

      {/* Container */}
      <main className="container">
        <div className="cont profile">
          <div className="member_name">
            {members.map((member) => (
              <p key={member.id}>
                <a href="#" onClick={() => setActiveId(member.id)}>
                  {member.name}
                </a>
              </p>
            ))}
          </div>

          {members.map((member) => (
            <div
              key={member.id}
              className="pf_inner"
              style={{ display: activeId === member.id ? 'block' : 'none' }}
            >
              <div className="profile_img">
                <div className="color_bg artist_crbg" />
                <div className="artist_img">
                  <img
                    alt={member.name}
                    width={455}
                    height={580}
                    src={member.img}
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
      </main>

    </div>
  );
}
