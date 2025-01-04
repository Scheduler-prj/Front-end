import React from "react";
import styled from "styled-components";

export const SidePanel = () => {
    return (
        <PanelWrapper>
            <h2>오늘의 할 일</h2>
            <ul>
                <li>물 마시기</li>
                <li>영양제 챙겨 먹기</li>
            </ul>
            <h2>루틴</h2>
            <ul>
                <li>운동 30분</li>
                <li>독서 10페이지</li>
            </ul>
        </PanelWrapper>
    );
};

const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    flex: 1 0 0; /* 너비 비율 */
    min-width: 260px;
    max-width: 280px;
    gap: 40px; /* 자식 요소 간의 간격 */
    align-items: flex-start; /* 자식 요소 왼쪽 정렬 */
    box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */
    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    padding: 20px; /* 내부 여백 */
`;
