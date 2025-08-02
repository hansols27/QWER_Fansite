import { CSSProperties } from 'react';
import qwerImg from '@/assets/images/QWER.jpg';

export interface MemberContentItem {
  type: 'text' | 'image';
  content: string;
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
        content:
          'https://i.namu.wiki/i/dRjPWcZhU3GrVT9w80ZquT7K54-q9DjnmtPJO9dJKtu6WhLPPNjk8tJXp3m1qRGNP6y2Ex11vv3gonkZabOYZ1BK1rziJ8u2X_KEHb0xKMWBrxV6FQUwQCOfQsO0ZoeOkD5CFpnwCRPGCwftQTP6fw.webp',
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
        content:
          'https://i.namu.wiki/i/hbKeWtiKSk5kN0AfvCHP5HfkzB2KXsvGjXHAunCwYrumUvA7H8O2DoHrszpn0mU57W0cUPqiWTK9kX8SKTqPrIuPOu-40W3NUHIUf91F3nTNFuR2MExUyb6We5vq-SiKUDSrL6lgiVdWn0DruGzlpw.webp',
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
        content:
          'https://i.namu.wiki/i/OKJRwxPvC1hhbsFqoNOFCGp6fsOAoAnKoR1tNFq7gySbTxfB8Xe1z8PzCfmsPvoxxBiMYrQT2KCvTex7bit1uhb6ePoqgZ6TbsK0ezfO6WkmLDtYJaRP3V87amzP7dY9wu0dMrrASMDQ8Ju9F2AxhA.webp',
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
        content:
          'https://i.namu.wiki/i/hvKmXOkoop8-Zcw9Con3GIbzq7Q4epl9f8WVU2xvNl-qzJB5OIChrFo3oMMITiolPKfiJm8yV3Rl9tQ_jZthb1Hugx5sXENYVeBxlN4hLCaKyYb-KB7w9kfLf-Kv9bx9bvbg9UeO4GoKIJ3_BAoSmQ.webp',
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
