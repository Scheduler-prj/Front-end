import QuizWrapper from "../../components/Common/Quiz/QuizWrapper";
import QuizResultContent from "../../components/QuizResult/QuizResultContent";
import Row from "../../styles/Layouts/Row";

export const QuizResult = () => {
  return (
    <Row style={{ padding: "2.43%" }}>
      <QuizResultContent />
      {/* <TotalQuizPannel /> */}
    </Row>
  );
};
