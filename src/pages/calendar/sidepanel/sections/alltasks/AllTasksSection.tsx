import React, {useState} from 'react';
import styled from "styled-components";
import {useTasksStore} from "../../../../../store/feature/tasksStore";
import { ReactComponent as Edit } from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg"
import {SubT1, T6, T7} from "../../../../../styles/Typography";
import {TaskCreation} from "../today/TaskCreation";

export const AllTasksSection = () => {
    const {tasks, fetchTasks, toggleTask, submitTask} = useTasksStore();

    // 완료된/미완료된 할 일 분리
    const completedTasks = tasks.filter((task) => task.completed);
    const incompleteTasks = tasks.filter((task) => !task.completed);

    // 상태 관리 (현재 활성화된 탭 상태)
    const [activeTab, setActiveTab] = useState<"incomplete" | "completed">("incomplete");
    const [isCreating, setIsCreating] = useState(false);

    const handleCreateClick = () => {
        setIsCreating(true); // "할 일 생성하기" 버튼 클릭 시 상태 변경
    };

    const handleBack = () => {
        setIsCreating(false); // TaskCreation 에서 뒤로가기 시 상태 복귀
    };

    if (isCreating) {
        return <TaskCreation onBack={handleBack} />;
    }

    // 현재 활성화 된 탭 상태에 따라 렌더링할 데이터를 설정
    const tasksToRender = activeTab === "incomplete" ? incompleteTasks : completedTasks;

    return (
        <AllTasksWrapper>
            <Header>
                <Title>모든 할 일</Title>
                <Edit />
            </Header>
            <Divider />
            <Tabs>
                <TabButton
                    selected={activeTab === "incomplete"}
                    onClick={() => setActiveTab("incomplete")}
                >
                    미완료
                </TabButton>
                <TabButton
                    selected={activeTab === "completed"}
                    onClick={() => setActiveTab("completed")}
                >
                    완료
                </TabButton>
            </Tabs>
            {/* 현재 활성화된 탭의 할 일 렌더링(완료 or 미완료) */}
            <TasksList>
                {tasksToRender.map((task) => (
                    <TaskItem
                        key={task.todoId}
                        color={task.color}
                    >
                        <TaskDate>{task.todoAt}</TaskDate>
                        <TaskContent>
                            <TaskTitle>{task.title}</TaskTitle>
                            <ButtonGroup>
                                {activeTab === "incomplete" && (
                                    <SubmitButton onClick={() => submitTask(task.todoId)}>
                                        성과 제출
                                    </SubmitButton>
                                )}
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
            <CreateButton onClick={handleCreateClick}>할 일 생성하기</CreateButton>
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

const TaskItem = styled.li<{color: string}>`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: ${({ color }) => color}; 
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


