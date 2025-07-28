import React, { useState } from 'react';
import menu from '@/assets/images/main.webp';

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <main id="main-content">
        <img src={menu} alt="main image" className="main-image" />
      </main>
    </>
  );
};

export default Home;
