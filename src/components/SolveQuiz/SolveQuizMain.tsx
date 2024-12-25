import Row from "../../styles/Layouts/Row";
import { QuizContent } from "./QuizContent/QuizContent";
import { TotalQuizPannel } from "./TotalQuizPannel/TotalQuizPannel";

export const SolveQuizMain = () => {
  return (
    <Row style={{ padding: "2.43%" }}>
      <QuizContent />
      <TotalQuizPannel />
    </Row>
  );
};
