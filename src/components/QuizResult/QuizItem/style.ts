import styled from "styled-components";
import Column from "../../../styles/Layouts/Column";

export const VerticalLine = styled.div<{ height: number }>`
	width: 8px;
	height: ${({ height }) => `${height}px`};
	background-color: ${({ theme }) => theme.colors.coolGray10};
`;

export const Number = styled(Column)`
	width: 48px;
	height: 48px;
	border-radius: 12px;
	background-color: ${({ theme }) => theme.colors.coolGray10};
`;
