import { useState } from 'react';
import { openNav, closeNav, initCommon } from "./utils/common";
import './styles/global.css';
import './styles/ui.css';
import './styles/modal.css';
import './styles/popup.css';
import './styles/animate.css';
import TopBanner from './components/layout/TopBanner';
import SideNav from './components/layout/SideNav';
import { ModalVideo } from './components/common/ModalVideo';

function App() {
  const [isOpen, setIsOpen] = useState(false);
   const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <div id="wrap" className={isOpen ? 'gnb_on' : ''}>
      <header>
        {/* 헤더 내용 (로고, 메뉴 버튼 등) */}
        <button onClick={openNav}>메뉴 열기</button>
      </header>

      <SideNav isOpen={isOpen} onClose={closeNav} />
      <TopBanner />

    <main style={{ height: '2000px' }}>
        스크롤 테스트용 더미 페이지
        <div className="mt-10">
          <button onClick={() => setIsVideoOpen(true)}>영상 모달 열기</button> 
        </div>
      </main>

      <ModalVideo
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="dQw4w9WgXcQ"
        channel="youtube"
      />
    </div>
  );
}

export default App;
