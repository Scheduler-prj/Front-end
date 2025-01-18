import Row from "../../styles/Layouts/Row";
import { QuizPannel } from "../Common/Quiz/QuizPannel/QuizPannel";
import { QuizContent } from "./QuizContent/QuizContent";

export const SolveQuizMain = () => {
	return (
		<Row style={{ padding: "2.43%" }}>
			<QuizContent />
			<QuizPannel pageType="quiz" />
		</Row>
	);
};
