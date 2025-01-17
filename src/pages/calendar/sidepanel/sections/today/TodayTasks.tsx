import React from "react";
import styled from "styled-components";
import {T6, B6, SubT1} from "../../../../../styles/Typography";
import { ReactComponent as Create } from "../../../../../assets/icons/calendar/rightsidebar/Create.svg";
import { ReactComponent as Edit } from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg";
import {useTasksStore} from "../../../../../store/feature/tasksStore";

interface TaskProps {
    onCreateTask: () => void;
}

export const TodayTasks = ({ onCreateTask }: TaskProps) => {
    const {tasks, toggleTask, submitTask} = useTasksStore();

    const completedTasks = tasks.filter((task) => task.completed);
    const incompleteTasks = tasks.filter((task) => !task.completed);

    return (
        <TasksWrapper>
            <Header>
                <Title>오늘의 할 일</Title>
                <Actions>
                    <Edit />
                    <Create onClick={onCreateTask}/>
                </Actions>
            </Header>
            <Divider />
            {/* 완료된 할 일 섹션 */}
            {completedTasks.length > 0 && (
                <>
                    <SectionHeader completed={true}>완료</SectionHeader>
                    <TasksList>
                        {completedTasks.map((task) => (
                            <TaskItem key={task.todoId} completed={task.completed}>
                                <TaskDate>{task.todoAt}</TaskDate>
                                <TaskContent>
                                    <TaskTitle>{task.title}</TaskTitle>
                                    <Checkbox
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.todoId)}
                                    />
                                </TaskContent>
                            </TaskItem>
                        ))}
                    </TasksList>
                </>
            )}
            {/* 미완료된 할 일 섹션 */}
            <TasksListWrapper/>
            {incompleteTasks.length > 0 && (
                <>
                    <SectionHeader completed={false}>미완료</SectionHeader>
                    <TasksList>
                        {incompleteTasks.map((task) => (
                            <TaskItem key={task.todoId} completed={task.completed}>
                                <TaskDate>{task.todoAt}</TaskDate>
                                <TaskContent>
                                    <TaskTitle>{task.title}</TaskTitle>
                                    <SubmitButton onClick={() => submitTask(task.todoId)}>
                                        성과 제출
                                    </SubmitButton>
                                    <Checkbox
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTask(task.todoId)}
                                    />
                                </TaskContent>
                            </TaskItem>
                        ))}
                    </TasksList>
                </>
            )}
        </TasksWrapper>
    );
};

const TasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    gap: 10px;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 12px 0px rgba(239, 239, 246, 0.8);
`;

// 완료/미완료 섹션 헤더 스타일
const SectionHeader = styled.div<{ completed: boolean }>`
    display: inline-block;
    padding: 8px 20px; /* 내부 여백 추가 */
    font-size: 14px;
    font-weight: bold;
    color: ${({ completed }) => (completed ? "#6373FF" : "#FFF")};
    background-color: ${({ completed }) => (completed ? "#F6F7FF" : "#6373FF")}; /* 배경색 */    
    border-radius: 40px; /* 둥근 테두리 */
    text-align: center;
`;

const TasksListWrapper = styled.div`
    margin-bottom: 40px; /* 섹션 간 간격 */
    &:last-child {
        margin-bottom: 0; /* 마지막 섹션은 여백 제거 */
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled(T6)`
`;

const Actions = styled.div`
    display: flex;
    gap: 8px;
    align-items: center; /* 세로 정렬 */
    justify-content: center; /* 가로 정렬 */
    height: 100%; /* 부모 컨테이너에 따라 필요 시 높이 설정 */
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D4D6EB; /* 실선 색상 */
    margin: 8px 0;
`;

const TasksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const TaskItem = styled.li<{ completed: boolean }>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 8px;
    background-color: ${({ completed, theme }) =>
    completed ? theme.colors.coolGray10 : "#FFF6E5"};
    margin-bottom: 8px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TaskDate = styled(B6)`
    background-color: #f0f0f0;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #333;
    border: 0.4px solid #d4d6eb; /* 선 추가 */
`;

const TaskContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 8px;
`;

const TaskTitle = styled(SubT1)`
`;

const Checkbox = styled.input`
    width : 28px;
    height : 28px;
    margin-right: 12px;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    border-radius: 4px; /* 둥근 모서리 */
    border: 1px solid #5F74FF; /* 테두리 색상 */
    background-color: #FFF; /* 배경색 */
    color: #5F74FF; /* 텍스트 색상 */
    padding: 4px 12px; /* 내부 여백 */
    cursor: pointer;
    font-size: 12px;
    font-weight: bold; /* 텍스트 강조 */
    margin-left: 56px;

    &:hover {
        background-color: #E3EAFD; /* 호버 시 배경색 */
        color: #3F51B5; /* 호버 시 텍스트 색상 */
        border-color: #3F51B5; /* 호버 시 테두리 색상 */
    }

    &:active {
        background-color: #D4D6EB; /* 클릭 시 배경색 */
        border-color: #6373FF; /* 클릭 시 테두리 색상 */
    }

    &:disabled {
        background-color: #F0F0F0; /* 비활성화 시 배경색 */
        color: #A0A0A0; /* 비활성화 시 텍스트 색상 */
        border-color: #D4D6EB; /* 비활성화 시 테두리 색상 */
        cursor: not-allowed; /* 비활성화 상태 커서 */
    }
`;