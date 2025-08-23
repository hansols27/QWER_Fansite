// data/schedule.ts
import { RRule } from 'rrule';
import { ScheduleEvent } from '@/types/schedule';

// 기본 단발성 이벤트들
export const FIXED_EVENTS: ScheduleEvent[] = [
  {
    start: new Date(2025, 8, 16),
    end: new Date(2025, 8, 16),
    type: 'C',
    title: 'Concert',
  },
];

// 반복 이벤트 생성 유틸
const createYearlyEvent = (
  title: string,
  type: 'B' | 'E',
  month: number,
  day: number
) => {
  const rule = new RRule({
    freq: RRule.YEARLY,
    bymonth: month,
    bymonthday: day,
    dtstart: new Date(2023, month - 1, day),
  });

  return (start: Date, end: Date): ScheduleEvent[] =>
    rule.between(start, end).map((date) => ({
      start: date,
      end: date,
      title,
      type,
    }));
};

// 데뷔일
const getDebutEvents = createYearlyEvent('Debut ♡', 'E', 10, 18);

// 멤버 생일
const MEMBERS = [
  { name: 'CHODAN', month: 11, day: 1 },
  { name: 'MAJENTA', month: 6, day: 2 },
  { name: 'HINA', month: 1, day: 30 },
  { name: 'SIYEON', month: 5, day: 16 },
];

const getBirthdayEvents = MEMBERS.map((m) =>
  createYearlyEvent(`${m.name} Birthday 🎂`, 'B', m.month, m.day)
);

// 최종 EVENTS 가져오기 함수
export const getEventsInRange = (start: Date, end: Date): ScheduleEvent[] => {
  const debutEvents = getDebutEvents(start, end);
  const birthdayEvents = getBirthdayEvents.flatMap((fn) => fn(start, end));
  return [...FIXED_EVENTS, ...debutEvents, ...birthdayEvents];
};
