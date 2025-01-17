import React, {useState} from "react";
import {TabNavigation} from "./tabnavigation/TabNavigation";
import styled from "styled-components";
import {AllTasksSection} from "./sections/alltasks/AllTasksSection"
import {ScheduleSection} from "./sections/schedule/ScheduleSection"
import {Routine} from "./sections/today/Routine";
import {TodayTasks} from "./sections/today/TodayTasks";
import {RoutineCreation} from "./sections/today/RoutineCreation";
import {TaskCreation} from "./sections/today/TaskCreation";

export const SidePanel = () => {
    const [activeTab, setActiveTab] = useState("today");
    const [isCreatingRoutine, setIsCreatingRoutine] = useState(false); // 루틴 생성 상태 관리
    const [isCreatingTask, setIsCreatingTask] = useState(false); // 할 일 생성 상태 관리

    // 루틴 생성 화면으로 이동
    const handleCreateRoutine = () => {
        setIsCreatingRoutine(true);
    };

    // 루틴 목록 화면으로 돌아가기
    const handleBackToRoutineList = () => {
        setIsCreatingRoutine(false);
    };

    // 할 일 생성 화면으로 이동
    const handleCreateTask = () => {
        setIsCreatingTask(true);
    };

    // 할 일 목록 화면으로 돌아가기
    const handleBackToTaskList = () => {
        setIsCreatingTask(false);
    };

    return (
        <PanelWrapper>
            {/* TabNavigation 렌더링 */}
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* 현재 탭에 따른 콘텐츠 렌더링 */}
            {activeTab === "today" && (
                <>
                    {isCreatingRoutine ? (
                        <RoutineCreation onBack={handleBackToRoutineList} />
                    ) : isCreatingTask ? (
                        <TaskCreation onBack={handleBackToTaskList} />
                    ) : (
                        <>
                            <Routine onCreate={handleCreateRoutine} />
                            <TodayTasks onCreateTask={handleCreateTask} />
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
