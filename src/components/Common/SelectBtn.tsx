import styled from "styled-components";
import Column from "../../styles/Layouts/Column";

interface buttonPropsType {
	width: number;
	buttonType: "default" | "solved" | "correct" | "unselected" | "wrong";
	num: number;
	FontSize: any;
}
export default function SelectBtn({ width = 36, buttonType, num, FontSize }: buttonPropsType) {
	return (
		<SelectBtnStyle buttonType={buttonType} width={width} horizonAlign="center" verticalAlign="center">
			<FontSize>{num}</FontSize>
		</SelectBtnStyle>
	);
}

const SelectBtnStyle = styled(Column)<{
	buttonType: "default" | "solved" | "correct" | "unselected" | "wrong";
	width: number;
}>`
	width: ${({ width }) => `${width}px`};
	height: ${({ width }) => `${width}px`};
	border-radius: 50%;
	background-color: ${({ buttonType, theme }) =>
		buttonType === "default"
			? theme.colors.coolGray9
			: buttonType === "solved"
			? theme.colors.coolGray5
			: buttonType === "correct"
			? theme.colors.primary
			: buttonType === "unselected"
			? theme.colors.coolGray6
			: theme.colors.category.red};

	color: ${({ buttonType, theme }) =>
		buttonType === "default"
			? theme.colors.coolGray2
			: buttonType === "correct" || buttonType === "solved"
			? "#fff"
			: buttonType === "unselected"
			? theme.colors.coolGray5
			: theme.colors.category.redText};

	&:active {
	}
`;
