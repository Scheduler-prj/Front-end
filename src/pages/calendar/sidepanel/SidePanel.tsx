import React from "react";
import { TabNavigation } from "./tabnavigation/TabNavigation";
import styled from "styled-components";


export const SidePanel = () => {
    return (
        <PanelWrapper>
            {/* TabNavigation 렌더링 */}
            <TabNavigation />
            {/* 여기에 추가적인 SidePanel의 섹션을 추가 가능 */}
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
    //box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */
    background-color:  ${({ theme }) => theme.colors.coolGray10};
    border-radius: 16px;
    padding: 20px; /* 내부 여백 */
`;
