import React from 'react';
import styled from "styled-components";
import {useTasksStore} from "../../../../../store/feature/tasksStore";
import { ReactComponent as Edit } from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg"
import {SubT1, T6, T7} from "../../../../../styles/Typography";

export const AllTasksSection = () => {
    const {tasks, fetchTasks, toggleTask, submitTask} = useTasksStore();

    // 🔹 완료된/미완료된 할 일 분리
    const completedTasks = tasks.filter((task) => task.completed);
    const incompleteTasks = tasks.filter((task) => !task.completed);

    return (
        <AllTasksWrapper>
            <Header>
                <Title>모든 할 일</Title>
                <Edit />
            </Header>
            <Divider />
            <Tabs>
                <TabButton selected={true}>미완료</TabButton>
                <TabButton>완료</TabButton>
            </Tabs>
            {/* 미완료된 할 일 */}
            <TasksList>
                {incompleteTasks.map((task) => (
                    <TaskItem key={task.todoId}>
                        <TaskDate>{task.todoAt}</TaskDate>
                        <TaskContent>
                            <TaskTitle>{task.title}</TaskTitle>
                            <ButtonGroup>
                                <SubmitButton onClick={() => submitTask(task.todoId)}>
                                    성과 제출
                                </SubmitButton>
                                <Checkbox
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.todoId)}
                                />
                            </ButtonGroup>
                        </TaskContent>
                    </TaskItem>
                ))}
            </TasksList>
            <CreateButton>할 일 생성하기</CreateButton>
        </AllTasksWrapper>
    );
};

const AllTasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    border-radius: 20px;
    background: #fff; /* White */
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Title = styled(T6)`
`;

const Tabs = styled.div`
    display: flex;
    gap: 8px;
`;

const TabButton = styled(T7).attrs<{ selected?: boolean }>({ as: "button" })`
    background: ${(props) => (props.selected ? "#6373FF" : "#F6F7FF")};
    color: ${(props) => (props.selected ? "#FFF" : "#6373FF")};
    padding: 8px 20px;
    border-radius: 40px;
    border: none;
    cursor: pointer;
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d4d6eb;
    // margin: 16px 0;
`;

const TasksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const TaskItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: #fff6e5;
    border-radius: 8px;
    margin-bottom: 8px;
`;


const TaskContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center; /* 수직 정렬 */
    gap: 8px; /* 버튼과 체크박스 사이 간격 */
`;

const TaskDate = styled.div`
    font-size: 12px;
    color: #333;
    padding: 4px 8px;
    background: #f0f0f0;
    border-radius: 4px;
`;

const TaskTitle = styled(SubT1)`
`;

const SubmitButton = styled.button`
    margin-right: 8px; /* 체크박스와 버튼 간격 설정 */
    border-radius: 4px; /* 둥근 모서리 */
    border: 1px solid #5F74FF; /* 테두리 색상 */
    background-color: #FFF; /* 배경색 */
    color: #5F74FF; /* 텍스트 색상 */
    padding: 4px 12px; /* 내부 여백 */
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`;

const CreateButton = styled(T6).attrs({ as: "button" })`
    width: 100%;
    padding: 20px;
    background: #fff;
    color: #6373FF;
    border: 1px solid #5F74FF;
    border-radius: 8px;
    cursor: pointer;
`;


