import React, {useState} from "react";
import {TabNavigation} from "./tabnavigation/TabNavigation";
import styled from "styled-components";
import {AllTasksSection} from "./sections/alltasks/AllTasksSection"
import {ScheduleSection} from "./sections/schedule/ScheduleSection"
import {Routine} from "./sections/today/Routine";
import {TodayTasks} from "./sections/today/TodayTasks";
import {RoutineCreation} from "./sections/today/RoutineCreation";

export const SidePanel = () => {
    const [activeTab, setActiveTab] = useState("today");
    const [isCreating, setIsCreating] = useState(false); // 루틴 생성 상태 관리

    // 루틴 생성 화면으로 이동
    const handleCreateRoutine = () => {
        setIsCreating(true);
    };

    // 루틴 목록 화면으로 돌아가기
    const handleBackToList = () => {
        setIsCreating(false);
    };

    // 오늘의 할 일 데이터
    const tasks = [
        { id: 1, title: "교양 과제1", completed: true, date: "10/1" },
        { id: 2, title: "수학 챕터1~2 강의 듣기", completed: true, date: "10/1" },
        { id: 3, title: "수학 문제2개 풀기", completed: false, date: "10/1" },
    ];

    // 오늘의 할 일 상태 토글 함수
    const toggleTask = (id: number) => {
        console.log(`할 일 ${id} 상태 변경`);
        // 상태 변경 로직을 구현 예정(useState 등 사용 가능)
    };

    // 성과 제출 함수
    const submitTask = (id: number) => {
        console.log(`성과 제출: ${id}`);
        // 성과 제출 로직을 구현 예정
    };

    return (
        <PanelWrapper>
            {/* TabNavigation 렌더링 */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* 현재 탭에 따른 콘텐츠 렌더링 */}
            {activeTab === "today" && (
                <>
                    {isCreating ? (
                        <RoutineCreation onBack={handleBackToList} />
                    ) : (
                        <>
                            <Routine onCreate={handleCreateRoutine} />
                            <TodayTasks tasks={tasks} onToggle={toggleTask} onSubmit={submitTask} />
                        </>
                    )}
                </>
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
`;
