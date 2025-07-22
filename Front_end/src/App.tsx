import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './styles/global.css';
// 이미지 import
import instagramIcon from './assets/icons/sns_instagram.png';
import twitterIcon from './assets/icons/sns_twitter.png';
import youtubeIcon from './assets/icons/sns_youtube.png';
import cafeIcon from './assets/icons/sns_cafe.png';
import shopIcon from './assets/icons/sns_shop.png';

// SNS 링크 정보를 담은 배열
const socialLinks = [
  { id: 'instagram', url: 'https://www.instagram.com/qwerband_official/#', icon: instagramIcon },
  { id: 'twitter', url: 'https://x.com/official_QWER', icon: twitterIcon },
  { id: 'youtube', url: 'https://www.youtube.com/channel/UCgD0APk2x9uBlLM0UsmhQjw', icon: youtubeIcon },
  { id: 'cafe', url: 'https://cafe.naver.com/eggkim', icon: cafeIcon },
  { id: 'shop', url: 'https://qwershop.kr/index.html', icon: shopIcon, type: 'tp1' }
];


const App: React.FC = () => {
  // 새 창에서 링크 열기 함수
  const openInNewTab = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <Header />
      
      <main>
        
      </main>
      {/* 왼쪽 하단에 세로로 배치된 SNS 아이콘 */}
      <ul className="sns_menu">
        {socialLinks.map((social) => (
          <li 
            key={social.id} 
            className={social.type || ''}
            onClick={() => openInNewTab(social.url)}
            title={social.id}
          >
            <img src={social.icon} alt={`${social.id} 아이콘`} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default App;
