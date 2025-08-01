import React, { useState } from 'react';
import { members } from '@/data/members';
import '@/ui/profile.css';

import youtubeIcon from '@/assets/icons/youtube.svg';
import instagramIcon from '@/assets/icons/instagram.svg';
import twitterIcon from '@/assets/icons/twitter.png';
import weverseIcon from '@/assets/icons/weverse.png';
import tiktokIcon from '@/assets/icons/tiktok.svg';
import cafeIcon from '@/assets/icons/cafe.svg';

export default function Profile() {
  const [selectedId, setSelectedId] = useState(members[0].id);
  const selectedMember = members.find((m) => m.id === selectedId);

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          01
          <span className="s_line"></span>
          PROFILE
        </div>
      </div>

      {/* Main */}
      <div className="cont profile">
        {/* Member Selector */}
        <div className="member_name">
          {members.map((member) => (
            <p key={member.id}>
              <button
                onClick={() => setSelectedId(member.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                {member.name}
              </button>
            </p>
          ))}
        </div>

        {/* Profile Info */}
        {selectedMember && (
          <div className="pf_inner">
            {/* 이미지 */}
            <div className="profile_img">
              {selectedMember.contents
                .filter((item) => item.type === 'image')
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="artist_img"
                    style={item.style ?? undefined}
                  >
                    <img
                      src={item.content}
                      alt={selectedMember.name}
                      width={455}
                      height={580}
                    />
                  </div>
                ))}
            </div>

            {/* 텍스트 + SNS */}
            <div className="profile_txt">
              <div className="name_tt">{selectedMember.name}</div>

              {selectedMember.contents
                .filter((item) => item.type === 'text')
                .map((item, idx) =>
                  item.content
                    ?.split('\n')
                    .map((line, i) => <p key={`${idx}-${i}`}>{line}</p>)
                )}

              {/* SNS */}
              {selectedMember.sns &&
                Object.values(selectedMember.sns).some(Boolean) && (
                  <div className="sns_area">
                    {selectedMember.sns.youtube && (
                      <a
                        href={selectedMember.sns.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={youtubeIcon}
                          alt="YouTube"
                          className="sns-icon"
                        />
                      </a>
                    )}
                    {selectedMember.sns.instagram && (
                      <a
                        href={selectedMember.sns.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={instagramIcon}
                          alt="Instagram"
                          className="sns-icon"
                        />
                      </a>
                    )}
                    {selectedMember.sns.twitter && (
                      <a
                        href={selectedMember.sns.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitterIcon}
                          alt="Twitter"
                          className="sns-icon"
                        />
                      </a>
                    )}
                    {selectedMember.sns.weverse && (
                      <a
                        href={selectedMember.sns.weverse}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={weverseIcon}
                          alt="Weverse"
                          className="sns-icon"
                        />
                      </a>
                    )}
                    {selectedMember.sns.tiktok && (
                      <a
                        href={selectedMember.sns.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={tiktokIcon}
                          alt="TikTok"
                          className="sns-icon"
                        />
                      </a>
                    )}
                    {selectedMember.sns.cafe && (
                      <a
                        href={selectedMember.sns.cafe}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={cafeIcon}
                          alt="Fan Cafe"
                          className="sns-icon"
                        />
                      </a>
                    )}
                  </div>
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
