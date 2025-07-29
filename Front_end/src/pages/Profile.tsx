import React, { useState } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const members = [
  {
    id: '357',
    name: 'SUNGJIN',
    koreanName: '성진',
    birth: '1993.01.16',
    img: 'https://lv2-cdn.azureedge.net/day6/b9586130924f482787330f1316acaacf-%EC%84%B1%EC%A7%84%20%ED%94%84%EB%A1%9C%ED%95%84.jpg',
  },
  {
    id: '358',
    name: 'Young K',
    koreanName: 'Young K',
    birth: '1993.12.19',
    img: 'https://lv2-cdn.azureedge.net/day6/1e1c35d8c0e34967a06435f5033f87ca-Young%20K%20%ED%94%84%EB%A1%9C%ED%95%84.jpg',
  },
  {
    id: '359',
    name: 'WONPIL',
    koreanName: '원필',
    birth: '1994.04.28',
    img: 'https://lv2-cdn.azureedge.net/day6/0aa327e9f8874563a458b3123963bdb7-%EC%9B%90%ED%95%84%20%ED%94%84%EB%A1%9C%ED%95%84.jpg',
  },
  {
    id: '360',
    name: 'DOWOON',
    koreanName: '도운',
    birth: '1995.08.25',
    img: 'https://lv2-cdn.azureedge.net/day6/2f2a55c3b60249a2be045170d2e163b2-%EB%8F%84%EC%9A%B4%20%ED%94%84%EB%A1%9C%ED%95%84.jpg',
  },
];

export default function Day6Profile() {
  const [activeId, setActiveId] = useState('357');

  return (
    <div id="wrap">
      <Header />

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
              id={member.id}
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

      <Footer />
    </div>
  );
}
