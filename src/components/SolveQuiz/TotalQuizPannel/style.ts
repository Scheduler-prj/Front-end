import styled from "styled-components";
import { media } from "../../../styles/media";
import Column from "../../../styles/Layouts/Column";

export const TotalQuizPannelWrapper = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.coolGray9};
  padding: 2.19% 1.95%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  ${media.tablet`
    display: none;
  `}
`;

export const TotalQuizPannelWrapperTabeltMode = styled(Column)<{
  isPannelOpen: boolean;
}>`
  padding: 80px 12% 72px 12%;
  gap: 36px;
`;

export const QuizNumberWrapper = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin: 0px 4.42%;
`;

export const QuizNumber = styled.div`
  background-color: ${({ theme }) => theme.colors.coolGray4};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
