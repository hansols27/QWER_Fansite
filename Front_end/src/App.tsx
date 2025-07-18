import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <header>
        <div className="logo">QWER 팬사이트</div>
        <nav>
          <ul>
            <li>
              <a href="#home">홈</a>
            </li>
            <li>
              <a href="#photos">사진</a>
            </li>
            <li>
              <a href="#videos">영상</a>
            </li>
            <li>
              <a href="#community">커뮤니티</a>
            </li>
            <li>
              <a href="#schedule">스케줄</a>
            </li>
            <li>
              <a href="#project">프로젝트</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Slider */}
      <section className="slider" id="home">
        <div className="slides">
          <div
            className="slide"
            style={{
              backgroundImage: "url('https://i.imgur.com/uAfOqxO.jpg')",
            }}
          >
            <div className="slide-overlay">
              <h2 className="slide-title">QWER 멤버1 무대</h2>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage: "url('https://i.imgur.com/ovmXGzB.jpg')",
            }}
          >
            <div className="slide-overlay">
              <h2 className="slide-title">QWER 멤버2 사진</h2>
            </div>
          </div>
          <div
            className="slide"
            style={{
              backgroundImage: "url('https://i.imgur.com/TCJf0Fa.jpg')",
            }}
          >
            <div className="slide-overlay">
              <h2 className="slide-title">QWER 공연 현장</h2>
            </div>
          </div>
        </div>
        <div className="slider-nav">
          <button id="prev">&#10094;</button>
          <button id="next">&#10095;</button>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos">
        <h2>사진 자료실</h2>
        <div className="card-grid">
          <div className="card">
            <img src="https://i.imgur.com/uAfOqxO.jpg" alt="QWER 멤버1" />
            <div className="card-content">
              <h3>멤버1 스테이지</h3>
              <p>멤버1의 멋진 무대 모습</p>
            </div>
          </div>
          <div className="card">
            <img src="https://i.imgur.com/ovmXGzB.jpg" alt="QWER 멤버2" />
            <div className="card-content">
              <h3>멤버2 화보</h3>
              <p>멤버2의 팬미팅 현장 사진</p>
            </div>
          </div>
          <div className="card">
            <img src="https://i.imgur.com/TCJf0Fa.jpg" alt="QWER 공연" />
            <div className="card-content">
              <h3>공연 현장</h3>
              <p>QWER의 라이브 공연 사진</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos">
        <h2>영상 자료실</h2>
        <div className="card-grid">
          <div className="card">
            <iframe
              width="100%"
              height={180}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="QWER 영상"
              frameBorder={0}
              allowFullScreen
            ></iframe>
            <div className="card-content">
              <h3>공식 뮤직비디오</h3>
              <p>QWER의 대표곡 뮤직비디오</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community">
        <h2>커뮤니티</h2>
        <p>
          팬들이 자유롭게 소통할 수 있는 게시판과 채팅방을 준비 중입니다. 곧
          오픈 예정입니다!
        </p>
      </section>

      {/* Schedule Section */}
      <section id="schedule">
        <h2>스케줄</h2>
        <ul>
          <li>2025-08-01: 신곡 발매</li>
          <li>2025-08-15: 팬미팅 서울</li>
          <li>2025-09-01: 콘서트 시작 (부산)</li>
        </ul>
      </section>

      {/* Project Section */}
      <section id="project">
        <h2>프로젝트</h2>
        <p>생일 서포트, 굿즈 제작 등 다양한 팬 프로젝트가 진행됩니다.</p>
      </section>

      <footer>&copy; 2025 QWER 팬사이트. 무단 복제 및 배포 금지.</footer>
    </>
  );
};

export default App;
