import { ScheduleEvent } from "@/types/schedule";

export const EVENTS: ScheduleEvent[] = [
  { start: new Date(2025, 7, 25), end: new Date(2025, 7, 25), type: "B", title: "Happy Birthday DOWOON ♡" },
  { start: new Date(2025, 10, 5, 19, 0), end: new Date(2025, 10, 5, 21, 0), type: "C", title: "DAY6 Concert in Seoul" },
  { start: new Date(2025, 11, 20), end: new Date(2025, 11, 20), type: "E", title: "Fan Meeting Event" },
  { start: new Date(2026, 0, 1), end: new Date(2026, 0, 1), type: "B", title: "Happy New Year 2026" },
  { start: new Date(2026, 3, 10, 18, 0), end: new Date(2026, 3, 10, 21, 0), type: "C", title: "Spring Live Festival" },
];
