import type { Album } from '@/types/album';

import Discord from '@/assets/images/albums/discord.jpg';
import Manito from '@/assets/images/albums/manito.jpg';
import Algorithm from '@/assets/images/albums/algorithm.jpg';
import Dear from '@/assets/images/albums/dear.jpg';

export const albums: Album[] = [
  {
    title: '난 네 편이야, 온 세상이 불협일지라도',
    date: '2025. 06. 09.',
    image: Dear,
    link: '/DiscographyView?AamSeq=228&AmSeq=0&PgIndex=0',
  },
  {
    title: 'Algorithm’s Blossom',
    date: '2024. 09. 23.',
    image: Algorithm,
    link: '/DiscographyView?AamSeq=243&AmSeq=0&PgIndex=0',
  },
  {
    title: 'MANITO',
    date: '2024. 04. 01.',
    image: Manito,
    link: '/DiscographyView?AamSeq=256&AmSeq=0&PgIndex=0',
  },
  {
    title: 'Harmony from Discord',
    date: '2023. 10. 18.',
    image: Discord,
    link: '/DiscographyView?AamSeq=275&AmSeq=0&PgIndex=0',
  },
];
