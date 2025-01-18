import styled from "styled-components";

export const QuizBtn = styled.button<{ selected: boolean }>`
  text-align: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.coolGray2};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.coolGray6 : theme.colors.coolGray9};
  border: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.colors.coolGray5}` : "none"};

  &:active {
    background-color: ${({ theme }) => theme.colors.coolGray6};
  }

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.coolGray6 : theme.colors.coolGray8};
  }
`;

export const QuizAnswer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.coolGray10};
  border-radius: 12px;
  padding: 2.32% 32px;
`;

export const Number = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
