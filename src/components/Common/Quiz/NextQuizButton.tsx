import { T6 } from "../../../styles/Typography";
import { SolveQuizStore } from "../../SolveQuiz/SolveQuizStore";
import { theme } from "../../../styles/theme";
import * as S from "./style";

const NextQuizButton = ({ isQuizContent, isCompleted }: { isQuizContent: boolean; isCompleted?: boolean }) => {
	const { isChecked } = SolveQuizStore();
	return (
		<S.CheckAnswer isChecked={isChecked || isCompleted!} isQuizContent={isQuizContent}>
			<T6
				style={{
					color: isChecked || isCompleted ? "#fff" : theme.colors.coolGray4,
					cursor: isChecked ? "pointer" : "not-allowed"
				}}
			>
				{isCompleted ? "완료하기 " : isChecked ? "다음 문제" : "정답 확인하기"}
			</T6>
		</S.CheckAnswer>
	);
};
export default NextQuizButton;
