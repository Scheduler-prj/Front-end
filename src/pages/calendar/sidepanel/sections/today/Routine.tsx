import React from "react";
import styled from "styled-components";

interface RoutineProps {
    routines: { id: number; title: string; completed: boolean }[];
    onToggle: (id: number) => void;
}

export const Routine = ({ routines, onToggle }: RoutineProps) => {
    return (
        <RoutineWrapper>
            <Header>
                <Title>루틴</Title>
                <Actions>
                    <EditButton>✏️</EditButton>
                    <AddButton>➕</AddButton>
                </Actions>
            </Header>
            <RoutineList>
                {routines.map((routine) => (
                    <RoutineItem key={routine.id}>
                        <label>
                            <Checkbox
                                type="checkbox"
                                checked={routine.completed}
                                onChange={() => onToggle(routine.id)}
                            />
                            <TaskTitle>{routine.title}</TaskTitle>
                        </label>
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

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const RoutineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const RoutineItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input`
  margin-right: 12px;
  cursor: pointer;
`;

const TaskTitle = styled.span`
  font-size: 14px;
  color: #333;
`;
