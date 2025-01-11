import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {T6, B3} from "../../../../../styles/Typography"
import {ReactComponent as Create} from "../../../../../assets/icons/calendar/rightsidebar/Create.svg";
import {ReactComponent as Edit} from "../../../../../assets/icons/calendar/rightsidebar/Edit.svg";
import {useRoutinesStore} from "../../../../../store/feature/routinStore";


export const Routine = ({ onCreate }: { onCreate: () => void }) => {
    const { routines, toggleRoutine, fetchRoutines } = useRoutinesStore();

    // 컴포넌트 마운트 시 루틴 데이터 가져오기
    useEffect(() => {
        fetchRoutines();
    }, [fetchRoutines]);

    return (
        <RoutineWrapper>
            <Header>
                <Title>루틴</Title>
                <Actions>
                    <Edit />
                    <Create onClick={onCreate} />
                </Actions>
            </Header>
            <Divider />
            <RoutineList>
                {routines.map((routine) => (
                    <RoutineItem
                        key={routine.routine_id}
                        completed={routine.isClear}
                    >
                        <TaskTitle>{routine.title}</TaskTitle>
                        <Checkbox
                            type="checkbox"
                            checked={routine.isClear}
                            onChange={() => toggleRoutine(routine.routine_id)}
                        />
                    </RoutineItem>
                ))}
            </RoutineList>
        </RoutineWrapper>
    );
};

const RoutineWrapper = styled.div`
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
    height: 1px; /* 실선 두께 */
    background-color: #D4D6EB; /* 실선 색상 */
    margin: 8px 0; /* 위아래 간격 */
`

const RoutineList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const RoutineItem = styled.li<{ completed: boolean }>`
    display: flex;
    justify-content: space-between; /* 체크박스와 텍스트를 양쪽에 배치 */
    align-items: center;
    min-width: 262px;
    max-width: 412px;
    padding: 12px 12px 12px 20px;
    gap: 12px;
    align-self: stretch;
    border-radius: 8px;
    background-color: ${({ completed, theme }) =>
            completed ? theme.colors.coolGray10 : "#FFFFFF"}; /* 완료 여부에 따른 배경색 */
    border: ${({ completed, theme }) =>
            completed ? "none" : "0.4px solid #2D2D2D"}; /* 완료되지 않은 경우 테두리 추가 */
    margin-bottom: 8px; /* 아이템 간격 추가 */

    &:last-child {
        margin-bottom: 0; /* 마지막 아이템은 간격 제거 */
    }
`;


const Checkbox = styled.input`
    width : 28px;
    height : 28px;
    margin-right: 12px;
    cursor: pointer;
`;

const TaskTitle = styled(B3)`
`;
