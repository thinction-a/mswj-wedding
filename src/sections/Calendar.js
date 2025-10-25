import React from "react";
import styled from "styled-components";
import { P } from "../GlobalStyle";

const Calendar = () => {
  return (
    <Container>
      <P fontSize={"22px"} fontWeight={700} className="headingDate">
        2026.01.04
      </P>
      <P fontSize={"16px"}>일요일 오후 12시 30분</P>
      <CalendarComponent />
      <P fontSize={"14px"} className="dDayViewer">
        {DDayCalculator("2026-01-04")}
      </P>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  background: var(--primary-bg-color);
  position: relative;
  padding: 0 32px var(--font-size);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  .headingDate {
    letter-spacing: 0.2rem;
    line-height: 2.4rem;
  }
  .dDayViewer {
    line-height: 2.4rem;
    margin-top: 16px;
  }
`;

const CalendarComponent = () => {
  return (
    <CalendarContainer>
      <article className="calendar" aria-label="2026년 1월 달력">
        <table role="grid" aria-labelledby="month-label">
          <thead>
            <tr>
              {dayName.map((str) => (
                <th scope="col" key={str}>
                  {str}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekArray.map((week, index) => (
              <tr key={"tr" + index}>
                {week.map((day, index) => {
                  if (day === null) {
                    return <td className="empty" key={"td" + index + day}></td>;
                  }
                  if (index === 0 || index === 6) {
                    const tdClassName = day === 4 ? "weekend today" : "weekend";
                    return (
                      <td className={tdClassName} key={"td" + index + day}>
                        <div className="day">{day}</div>
                      </td>
                    );
                  }
                  return (
                    <td key={"td" + index + day}>
                      <div className="day">{day}</div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  margin-top: 48px;
  .calendar {
    width: 100%;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
  table {
    margin: 24px auto;
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    font-size: 0.78rem;
    line-height: 1rem;
    th {
      padding-bottom: 8px;
    }
    td,
    th {
      aspect-ratio: 1;
      width: 30px;
      height: 30px;
      .day {
        height: 100%;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }
    }
  }
  .empty {
    color: transparent;
  }
  .weekend .day {
    color: #ef4444;
  }
  .today .day {
    background: var(--icon-color);
    color: #fff;
    border-radius: 50%;
  }
  @media (min-width: 420px) {
    .calendar {
      width: 375px;
    }
  }
`;

const dayName = ["일", "월", "화", "수", "목", "금", "토"];

const weekArray = [
  [null, null, null, null, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];

const DDayCalculator = (targetDate) => {
  const today = new Date();
  const target = new Date(targetDate);
  // 시/분/초 제거 (자정 기준 계산)
  today.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return `두 사람의 결혼식이 ${diffDays}일 남았습니다.`;
  } else if (diffDays === 0) {
    return `오늘은 결혼식 당일입니다.`;
  } else {
    return `결혼식이 ${Math.abs(diffDays)}일 지났습니다.`;
  }
};
