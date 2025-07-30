import qwerImg from '@/assets/images/QWER.jpg';

export interface Member {
  id: string;
  name: string;
  koreanName: string;
  birth: string;
  img: string;
}

export const members: Member[] = [
  {
    id: 'All',
    name: 'QWER',
    koreanName: '큐더블유이알',
    birth: '2023.10.18',
    img: qwerImg,
  },
  {
    id: 'Q',
    name: '쵸단 (Chodan)',
    koreanName: '홍지혜',
    birth: '1998.11.01.',
    img: 'https://i.namu.wiki/i/dRjPWcZhU3GrVT9w80ZquT7K54-q9DjnmtPJO9dJKtu6WhLPPNjk8tJXp3m1qRGNP6y2Ex11vv3gonkZabOYZ1BK1rziJ8u2X_KEHb0xKMWBrxV6FQUwQCOfQsO0ZoeOkD5CFpnwCRPGCwftQTP6fw.webp',
  },
  {
    id: 'W',
    name: '마젠타 (Magenta)',
    koreanName: '이아희',
    birth: '11997.06.02.',
    img: 'https://i.namu.wiki/i/hbKeWtiKSk5kN0AfvCHP5HfkzB2KXsvGjXHAunCwYrumUvA7H8O2DoHrszpn0mU57W0cUPqiWTK9kX8SKTqPrIuPOu-40W3NUHIUf91F3nTNFuR2MExUyb6We5vq-SiKUDSrL6lgiVdWn0DruGzlpw.webp',
  },
  {
    id: 'E',
    name: '히나 (Hina)',
    koreanName: '장나영',
    birth: '2001.01.30.',
    img: 'https://i.namu.wiki/i/OKJRwxPvC1hhbsFqoNOFCGp6fsOAoAnKoR1tNFq7gySbTxfB8Xe1z8PzCfmsPvoxxBiMYrQT2KCvTex7bit1uhb6ePoqgZ6TbsK0ezfO6WkmLDtYJaRP3V87amzP7dY9wu0dMrrASMDQ8Ju9F2AxhA.webp',
  },
  {
    id: 'R',
    name: '시연 (Siyeon)',
    koreanName: '이시연',
    birth: '2000.05.16.',
    img: 'https://i.namu.wiki/i/hvKmXOkoop8-Zcw9Con3GIbzq7Q4epl9f8WVU2xvNl-qzJB5OIChrFo3oMMITiolPKfiJm8yV3Rl9tQ_jZthb1Hugx5sXENYVeBxlN4hLCaKyYb-KB7w9kfLf-Kv9bx9bvbg9UeO4GoKIJ3_BAoSmQ.webp',
  },
];
