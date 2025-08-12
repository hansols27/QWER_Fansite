/*export const videoIds = [
  'pifz9JH1Re8',
  '8IMPpF2tIWI',
  '7qRCUAQ_XC8',
  'AlirzLFEHUI',
  'JFGRPgYeu38',
  'ImuWa3SJulY',
  'WGm2HmXeeRI',
  'On6Pm4M-dQQ',
];*/


export interface VideoItem {
  id: number;
  title: string;
  src: string;
}

export const videos: VideoItem[] = [
  {
    id: 1,
    title: "QWER Video 1",
    src: "https://www.youtube.com/embed/example1",
  },
  {
    id: 2,
    title: "QWER Video 2",
    src: "https://www.youtube.com/embed/example2",
  },
  {
    id: 3,
    title: "QWER Video 3",
    src: "https://www.youtube.com/embed/example3",
  },
];
