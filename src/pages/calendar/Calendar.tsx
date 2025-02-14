import React from "react";
import styled from "styled-components";

interface DayBoxProps {
    isCurrentMonth: boolean;
}

interface CalendarProps {
    year: number;
    month: number; // 0: 1월, 11: 12월
}

export const Calendar = ({year, month}: CalendarProps) => {
    const generateDays = (year: number, month: number) => {
        const today = new Date(); // 오늘 날짜
        const isToday = (d: number, m: number, y: number) =>
            d === today.getDate() && m === today.getMonth() && y === today.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 해당 달의 첫 요일
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // 해당 달의 총 일수
        const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7; // 필요한 셀 개수 계산

        const prevMonthDays = new Date(year, month, 0).getDate(); // 이전 달의 총 일수

        return Array.from({ length: totalCells }, (_, i) => {
            const dayNumber = i - firstDayOfMonth + 1;

            if (dayNumber <= 0) {
                // 이전 달의 날짜
                return { day: prevMonthDays + dayNumber, isCurrentMonth: false, isToday: false, tasks: [] };
            } else if (dayNumber > daysInMonth) {
                // 다음 달의 날짜
                return { day: dayNumber - daysInMonth, isCurrentMonth: false, isToday: false, tasks: [] };
            } else {
                // 현재 달의 날짜
                return {
                    day: dayNumber,
                    isCurrentMonth: true,
                    isToday: isToday(dayNumber, month, year),
                    tasks: []
                };
            }
        });
    };

    const days = generateDays(year, month);

    return (
        <CalendarGrid>
            {days.map((day, index) => (
                <DayBox
                    key={index}
                    $isCurrentMonth={day.isCurrentMonth}
                >
                    <DayNumber $isToday={day.isToday}>{day.day}</DayNumber>
                    <Tasks>
                        {day.tasks.map((task, idx) => (
                            <Task key={idx}>{task}</Task>
                        ))}
                    </Tasks>
                </DayBox>
            ))}
        </CalendarGrid>
    );
};

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr); /* 7열로 배치 */
    gap: 8px;
    //padding: 16px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 16px;
`;

const DayBox = styled.div<{ $isCurrentMonth: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px;
    height: 140px;
    min-width: 70px;
    max-width: 140px;
    gap: 12px;
    border-radius: 16px;
    opacity: ${({$isCurrentMonth}) => ($isCurrentMonth ? 1 : 0.4)};
    cursor: pointer;

    //&:hover {
    //  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    //}
`;

const DayNumber = styled.div<{ $isToday: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    background: ${({ $isToday, theme }) =>
            $isToday ? theme.colors.primary : "transparent"};
    color: ${({ $isToday, theme }) =>
            $isToday ? theme.colors.white : theme.colors.black};
    font-size: 16px;
    font-weight: bold;
`;

const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
`;

const Task = styled.div`
    font-size: 12px;
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.coolGray10};
    padding: 4px 8px;
    border-radius: 8px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;
