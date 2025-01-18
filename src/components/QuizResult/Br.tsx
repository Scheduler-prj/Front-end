import { styled } from "styled-components";

export default function Br() {
	return <BrStyle />;
}

const BrStyle = styled.div`
	width: 100%;
	height: 8px;
	border-radius: 2px;
	background-color: ${({ theme }) => theme.colors.coolGray10};
	margin-bottom: 2.75rem;
`;
