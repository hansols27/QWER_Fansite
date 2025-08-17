import type { Album } from '@/types/album';

import Discord from '@/assets/images/albums/discord.jpg';
import Manito from '@/assets/images/albums/manito.jpg';
import Algorithm from '@/assets/images/albums/algorithm.jpg';
import Dear from '@/assets/images/albums/dear.jpg';

export const albums: Album[] = [
  {
    id: 1,
    title: '난 네 편이야, 온 세상이 불협일지라도',
    date: '2025. 06. 09.',
    image: Dear,
  },
  {
    id: 2,
    title: 'Algorithm’s Blossom',
    date: '2024. 09. 23.',
    image: Algorithm,
  },
  {
    id: 3,
    title: 'MANITO',
    date: '2024. 04. 01.',
    image: Manito,
  },
  {
    id: 4,
    title: 'Harmony from Discord',
    date: '2023. 10. 18.',
    image: Discord,
  },
];
