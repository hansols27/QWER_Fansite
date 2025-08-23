import { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@/ui/schedule.css';
import { ScheduleEvent } from '@/types/schedule';
import { getEventsInRange } from '@/data/schedule';

const localizer = momentLocalizer(moment);

export default function Schedule() {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<ScheduleEvent[]>([]);

  // 캘린더 범위 바뀔 때 반복 이벤트 포함해서 세팅
  const handleRangeChange = (range: any) => {
    const start = range.start || range[0];
    const end = range.end || range[range.length - 1];
    setEvents(getEventsInRange(start, end));
  };

  // 날짜 클릭 시 해당 날짜 이벤트 필터링
  const handleSelectSlot = ({ start }: { start: Date }) => {
    setSelectedDate(start);
    const filtered = events.filter((e) => moment(e.start).isSame(start, 'day'));
    setSelectedEvents(filtered);
  };

  // 초기 상태: 오늘 날짜 이벤트
  useEffect(() => {
    const todayEvents = events.filter((e) =>
      moment(e.start).isSame(new Date(), 'day')
    );
    setSelectedEvents(todayEvents);
  }, [events]);

  // 타입별 색상
  const eventStyleGetter = (event: ScheduleEvent) => {
    let backgroundColor = '';
    if (event.type === 'B') backgroundColor = '#e79c89';
    if (event.type === 'C') backgroundColor = '#72d2c0';
    if (event.type === 'E') backgroundColor = '#f1bd4c';
    return {
      style: {
        backgroundColor,
        borderRadius: '8px',
        color: '#fff',
        border: 'none',
        padding: '2px 4px',
        fontSize: '0.8rem',
      },
    };
  };

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          05
          <span className="s_line"></span>
          SCHEDULE
        </div>
      </div>

      {/* Main */}
      <div className="cont schedule">
        {/* Left: Title + Selected day details */}
        <div className="n_left">
          <div className="title n_tt">SCHEDULE</div>
          <div className="sch_cont">
            <div className="dt_date">
              {moment(selectedDate).format('YYYY-MM-DD')}
            </div>
            <ul className="sch_detail">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((ev, idx) => (
                  <li key={idx}>
                    <span
                      className={
                        ev.type === 'B'
                          ? 'sbt_birthday'
                          : ev.type === 'C'
                          ? 'sbt_concert'
                          : 'sbt_event'
                      }
                    >
                      {ev.type}
                    </span>
                    {ev.title}
                  </li>
                ))
              ) : (
                <li>이 날은 일정이 없습니다.</li>
              )}
            </ul>
          </div>
        </div>

        {/* Right: Calendar */}
        <div className="n_right">
          <div className="cd_calendar">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              selectable
              onSelectSlot={handleSelectSlot}
              onRangeChange={handleRangeChange}
              style={{ height: 500 }}
              eventPropGetter={eventStyleGetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
