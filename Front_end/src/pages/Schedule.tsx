import React, { useState } from 'react';
import '@/ui/schedule.css';

const Schedule: React.FC = () => {
  const [yyyy, setYyyy] = useState('2025');
  const [mm, setMm] = useState('08');
  const [dd, setDd] = useState('');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setYyyy(year);
    setDd('0');
    handleSubmit();
  };

  const changedMonth = (month: string) => {
    setMm(month);
    setDd('0');
    handleSubmit();
  };

  const goSch = (day: string) => {
    setDd(day);
    handleSubmit();
  };

  const handleSubmit = () => {
    console.log('Form submitted:', { yyyy, mm, dd });
    // 실제 요청이 필요하면 fetch 또는 axios로 API 호출
  };

  return (
    <div id="wrap">
      <input id="PointColor" name="PointColor" type="hidden" value="#dcffff" />

      <form id="frm" method="post">
        <input id="Yyyy" name="Yyyy" type="hidden" value={yyyy} />
        <input id="Mm" name="Mm" type="hidden" value={mm} />
        <input id="Dd" name="Dd" type="hidden" value={dd} />

        {/* Side */}
        <div id="side">
          <div className="side2">
            06
            <span className="s_line"></span>
            SCHEDULE
          </div>
        </div>

        {/* Container */}
        <div className="container">
          <div className="cont schedule">
            {/* 왼쪽 텍스트 */}
            <div className="n_left" style={{ minHeight: '614px' }}>
              <div className="title n_tt">SCHEDULE</div>
              <div className="sch_cont">
                <ul className="sch_detail">
                  <li className="dt_date">25 &nbsp; MON</li>
                  <li>
                    <span className="sbt_concert">E</span>Happy Birthday DOWOON
                    ♡
                  </li>
                </ul>
              </div>

              <div className="page-btn-box nt_bt"></div>
            </div>

            {/* 오른쪽 달력 */}
            <div className="n_right" style={{ minHeight: '652px' }}>
              <div className="selectbox">
                <label htmlFor="ex_select">{yyyy}</label>
                <select id="ex_select" onChange={handleYearChange} value={yyyy}>
                  <option value="">선택</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>

              <div className="cd_month">
                {[
                  'JAN',
                  'FEB',
                  'MAR',
                  'APR',
                  'MAY',
                  'JUN',
                  'JUL',
                  'AUG',
                  'SEP',
                  'OCT',
                  'NOV',
                  'DEC',
                ].map((month, index) => {
                  const monthNum = String(index + 1).padStart(2, '0');
                  return (
                    <p
                      key={month}
                      className={mm === monthNum ? 'month_ck' : ''}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          changedMonth(monthNum);
                        }}
                      >
                        {month}
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
                <tbody>
                  {/* 날짜 셀 예시 */}
                  <tr className="cd_day">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="sch_off">1</div>
                    </td>
                    <td>
                      <div className="sch_off">2</div>
                    </td>
                  </tr>

                  {/* 생일이 있는 날 */}
                  <tr className="cd_day">
                    <td className="sun">
                      <div className="sch_off">24</div>
                    </td>
                    <td>
                      <div className="sch_on artist_crbg">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            goSch('25');
                          }}
                        >
                          25
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="sch_off">26</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* 하단 안내 */}
              <div className="sch_cont bt_color">
                <ul className="sch_detail">
                  <li>
                    <span className="sbt_etc">T</span>ETC
                  </li>
                  <li>
                    <span className="sbt_concert">E</span>Event
                  </li>
                  <li>
                    <span className="sbt_radio">A</span>Anniversary
                  </li>
                  <li>
                    <span className="sbt_magazine">R</span>Release
                  </li>
                  <li>
                    <span className="sbt_tv">S</span>Show
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Schedule;
