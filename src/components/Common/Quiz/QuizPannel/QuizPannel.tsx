import * as S from "./style";
import { DurationTime } from "./DurationTime/DurationTime";
import CommonContent from "./CommonContent";
import useDeviceQueries from "../../../../hook/useDeviceQueries";

//받아야할 변수들
//문제 개수
//문제에 따른 푼퀴즈 / 맞은퀴즈 / 안푼퀴즈
export const QuizPannel = () => {
	return (
		<S.TotalQuizPannelWrapper>
			<DurationTime />
			<CommonContent />
		</S.TotalQuizPannelWrapper>
	);
};
