import { QuizPannel } from "../../components/Common/Quiz/QuizPannel/QuizPannel";
import QuizResultContent from "../../components/QuizResult/QuizResultContent";
import Row from "../../styles/Layouts/Row";

export const QuizResult = () => {
	return (
		<Row style={{ padding: "2.43%" }}>
			<QuizResultContent />
			<QuizPannel />
		</Row>
	);
};
