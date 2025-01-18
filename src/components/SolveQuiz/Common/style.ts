import styled from "styled-components";
import { media } from "../../../styles/media";

export const CheckAnswer = styled.div<{
  isChecked: boolean;
  isQuizContent: boolean;
}>`
  display: ${({ isQuizContent }) => (isQuizContent ? "none" : "block")};
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.coolGray8};
  padding: 21px 16.6%;
  border-radius: 10px;
  width: 100%;
  text-align: center;

  ${media.tablet`
  display: ${(isQuizContent: boolean) => (isQuizContent ? "block" : "none")};
    width: fit-content;
    padding: 15px 4.51%;
    white-space: nowrap;
    margin-left: 2.7%;
  `}

  &:hover {
    background-color: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.secondary : theme.colors.coolGray8};
  }
`;
