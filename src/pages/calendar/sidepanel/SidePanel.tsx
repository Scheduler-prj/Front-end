import React, {useState} from "react";
import {TabNavigation} from "./tabnavigation/TabNavigation";
import styled from "styled-components";
import {TodaySection} from "./sections/TodaySection"
import {AllTasksSection} from "./sections/AllTasksSection"
import {ScheduleSection} from "./sections/ScheduleSection"
import {Routine} from "./sections/today/Routine";


export const SidePanel = () => {
    const [activeTab, setActiveTab] = useState("today");

    // 루틴 데이터를 정의합니다.
    const routines = [
        { id: 1, title: "물 마시기", completed: true },
        { id: 2, title: "영양제 챙겨먹기", completed: false },
    ];

    // 루틴의 상태를 토글하는 함수
    const toggleRoutine = (id: number) => {
        console.log(`루틴 ${id} 상태 변경`);
        // 상태 변경 로직을 구현하세요 (useState 등 사용 가능)
    };
    return (
        <PanelWrapper>
            {/* TabNavigation 렌더링 */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* 현재 탭에 따른 콘텐츠 렌더링 */}
            {activeTab === "today" && (
                <Routine routines={routines} onToggle={toggleRoutine} />
            )}
            {activeTab === "allTasks" && <AllTasksSection />}
            {activeTab === "schedule" && <ScheduleSection />}
        </PanelWrapper>
    );
};

const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    flex: 1 0 0; /* 너비 비율 */
    min-width: 260px;
    max-width: 460px;
    gap: 40px; /* 자식 요소 간의 간격 */
    align-items: flex-start; /* 자식 요소 왼쪽 정렬 */
    background-color:  ${({ theme }) => theme.colors.coolGray10};
    border-radius: 16px;
    padding: 20px; /* 내부 여백 */
`;
