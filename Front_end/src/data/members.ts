import { CSSProperties } from 'react';
import qwerImg from '@/assets/images/QWER.jpg';

import QImg1 from '@/assets/images/Q1_001.jpg';
import QImg2 from '@/assets/images/Q1_002.jpg';
import QImg3 from '@/assets/images/Q2_001.jpg';
import QImg4 from '@/assets/images/Q2_002.jpg';

import WImg1 from '@/assets/images/W1_001.jpg';
import WImg2 from '@/assets/images/W1_002.jpg';
import WImg3 from '@/assets/images/W2_001.jpg';
import WImg4 from '@/assets/images/W3_002.jpg';

import EImg1 from '@/assets/images/E1_001.jpg';
import EImg2 from '@/assets/images/E2_001.jpg';
import EImg3 from '@/assets/images/E2_002.jpg';
import EImg4 from '@/assets/images/E3_001.jpg';

import RImg1 from '@/assets/images/R1_001.jpg';
import RImg2 from '@/assets/images/R1_002.jpg';
import RImg3 from '@/assets/images/R2_001.jpg';
import RImg4 from '@/assets/images/R2_002.jpg';

export interface MemberContentItem {
  type: 'text' | 'image';
  content: string | string[];
  style?: CSSProperties;
}

export interface MemberSNS {
  youtube?: string;
  instagram?: string;
  twitter?: string;
  tictok?: string;
  weberse?: string;
  cafe?: string;
  [key: string]: string | undefined;
}

export interface Member {
  id: string;
  name: string;
  contents: MemberContentItem[];
  sns?: MemberSNS;
}

export const members: Member[] = [
  {
    id: 'All',
    name: 'QWER',
    contents: [
      {
        type: 'text',
        content: 'Debut : 2023.10.18\nMember : Chodan, Magenta, Hina, Siyeon',
      },
      {
        type: 'image',
        content: qwerImg,
        style: {
          boxShadow: '15px 15px 20px 0 #000000ff',
        },
      },
    ],
    sns: {
      youtube: 'https://www.youtube.com/@QWER_Band_official',
      instagram: 'https://www.instagram.com/qwerband_official',
      twitter: 'https://x.com/official_QWER',
      tictok: 'https://www.tiktok.com/@qwerband_official',
      weberse: 'https://weverse.io/qwer/artistpedia',
      cafe: 'https://cafe.naver.com/eggkim',
    },
  },
  {
    id: 'Q',
    name: 'Chodan',
    contents: [
      {
        type: 'text',
        content:
          'Name : 쵸단\nBirth : 1998.11.01.\nPosition : Leader, Drum, Sub-vocal',
      },
      {
        type: 'image',
        content: [QImg1, QImg2, QImg3, QImg4],
        style: {
          boxShadow: '15px 15px 20px 0 #ffffffff',
        },
      },
    ],
    sns: {
      youtube: 'https://www.youtube.com/@chodan_',
      instagram: 'https://www.instagram.com/choda._.n',
      tictok: 'https://www.tiktok.com/@chodan__',
      cafe: 'https://cafe.naver.com/chodancafe',
    },
  },
  {
    id: 'W',
    name: 'Magenta',
    contents: [
      {
        type: 'text',
        content:
          'Name : 마젠타\nBirth : 1997.06.02.\nPosition : Base, Sub-vocal',
      },
      {
        type: 'image',
        content: [WImg1, WImg2, WImg3, WImg4],
        style: {
          boxShadow: '15px 15px 20px 0 #ff4edb',
        },
      },
    ],
    sns: {
      youtube: 'https://www.youtube.com/@%EB%A7%88%EC%A0%A0%ED%83%80',
      instagram: 'https://www.instagram.com/magenta_6262',
      tictok: 'https://www.tiktok.com/@magenta6262',
      twitter: 'https://x.com/magentaof62',
      cafe: 'https://cafe.naver.com/magentacafe',
    },
  },
  {
    id: 'E',
    name: 'Hina',
    contents: [
      {
        type: 'text',
        content:
          'Name : 히나\nBirth : 2001.01.30.\nPosition : Guitar, Keyboard, Sub-vocal',
      },
      {
        type: 'image',
        content: [EImg1, EImg2, EImg3, EImg4],
        style: {
          boxShadow: '15px 15px 20px 0 #00a8ff',
        },
      },
    ],
    sns: {
      youtube: 'https://www.youtube.com/@hapycb',
      instagram: 'https://www.instagram.com/i_am_young22',
      tictok: 'https://www.tiktok.com/@i_am_young22',
      twitter: 'https://x.com/hapycb',
      cafe: 'https://cafe.naver.com/nyangworld',
    },
  },
  {
    id: 'R',
    name: 'Siyeon',
    contents: [
      {
        type: 'text',
        content:
          'Name : 시연\nBirth : 2000.05.16.\nPosition : Main-vocal, Guitar',
      },
      {
        type: 'image',
        content: [RImg1, RImg2, RImg3, RImg4],
        style: {
          boxShadow: '15px 15px 20px 0 #00c853',
        },
      },
    ],
    sns: {
      instagram: 'https://www.instagram.com/siyo.co.kr',
      tictok: 'https://www.tiktok.com/@siyoming___qwer',
      twitter: 'https://x.com/siyo_min',
    },
  },
];
