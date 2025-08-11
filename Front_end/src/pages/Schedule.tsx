import React, { useState } from "react";
import "@/ui/schedule.css";

interface ScheduleEvent {
  day: number;
  type: "T" | "E" | "A" | "R" | "S";
  title: string;
}

export default function Schedule() {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("08");
  const [selectedDay, setSelectedDay] = useState<string>("");

  // 예시 데이터 (실제 데이터는 API로 불러오기 가능)
  const events: ScheduleEvent[] = [
    { day: 25, type: "E", title: "Happy Birthday DOWOON ♡" },
  ];

  const years = ["2025", "2024", "2023", "2022", "2021"];
  const months = [
    "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
  ];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);
    setSelectedDay("");
  };

  const handleMonthChange = (monthNum: string) => {
    setMonth(monthNum);
    setSelectedDay("");
  };

  const handleDayClick = (day: number) => {
    setSelectedDay(String(day));
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(Number(year), Number(month), 0).getDate();
    const firstDay = new Date(Number(year), Number(month) - 1, 1).getDay();

    const cells = [];
    for (let i = 0; i < firstDay; i++) {
      cells.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const event = events.find(e => e.day === day);
      const isSelected = String(day) === selectedDay;

      cells.push(
        <td
          key={day}
          className={day % 7 === 0 ? "sun" : ""}
        >
          <div
            className={isSelected ? "sch_on artist_crbg" : event ? "sch_on" : "sch_off"}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        </td>
      );
    }

    const rows = [];
    for (let i = 0; i < cells.length; i += 7) {
      rows.push(<tr key={`row-${i}`}>{cells.slice(i, i + 7)}</tr>);
    }

    return rows;
  };

  return (
    <div className="container">
      {/* Side */}
      <div id="side">
        <div className="side2">
          06
          <span className="s_line"></span>
          SCHEDULE
        </div>
      </div>

      {/* Main */}
      <div className="cont schedule">
        {/* Left: 이벤트 상세 */}
        <div className="n_left" style={{ minHeight: "614px" }}>
          <div className="title n_tt">SCHEDULE</div>
          <div className="sch_cont">
            <ul className="sch_detail">
              {events.map((e, idx) => (
                <li key={idx}>
                  <span className={`sbt_${e.type.toLowerCase()}`}>{e.type}</span>
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: 달력 */}
        <div className="n_right" style={{ minHeight: "652px" }}>
          <div className="selectbox">
            <label htmlFor="yearSelect">{year}</label>
            <select id="yearSelect" value={year} onChange={handleYearChange}>
              <option value="">선택</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="cd_month">
            {months.map((m, idx) => {
              const monthNum = String(idx + 1).padStart(2, "0");
              return (
                <p key={m} className={month === monthNum ? "month_ck" : ""}>
                  <a href="#" onClick={(e) => { e.preventDefault(); handleMonthChange(monthNum); }}>
                    {m}
                  </a>
                </p>
              );
            })}
          </div>

          <table className="cd_calendar">
            <thead>
              <tr className="cd_week">
                <th className="sun">SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>
            </thead>
            <tbody>{renderCalendar()}</tbody>
          </table>

          {/* 하단 안내 */}
          <div className="sch_cont bt_color">
            <ul className="sch_detail">
              <li><span className="sbt_etc">T</span>ETC</li>
              <li><span className="sbt_concert">E</span>Event</li>
              <li><span className="sbt_radio">A</span>Anniversary</li>
              <li><span className="sbt_magazine">R</span>Release</li>
              <li><span className="sbt_tv">S</span>Show</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
