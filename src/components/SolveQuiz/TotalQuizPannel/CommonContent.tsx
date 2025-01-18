import { B2, B4, T5, T7 } from "../../../styles/Typography";
import * as S from "./style";
import { theme } from "../../../styles/theme";
import Column from "../../../styles/Layouts/Column";
import Row from "../../../styles/Layouts/Row";
import NextQuizButton from "../../Common/Quiz/NextQuizButton";
import useDeviceQueries from "../../../hook/useDeviceQueries";

export default function CommonContent() {
  const { isDesktop } = useDeviceQueries();
  return (
    <>
      {/* 푼문제 번호 */}
      <S.QuizNumberWrapper>
        {[1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8, 9, 9, 10].map((number, index) => (
          <S.QuizNumber key={index}>
            <T7 style={{ color: "#fff" }}>{number}</T7>
          </S.QuizNumber>
        ))}
      </S.QuizNumberWrapper>
      {/* 푼 퀴즈 및 맞은 퀴즈 */}
      <Column gap={8} style={{ paddingLeft: "5.72%" }}>
        <Row gap={8} style={{ color: theme.colors.coolGray2 }}>
          <B2>{"푼 퀴즈 수"}</B2>
          <T5>{"40"}</T5>
        </Row>
        <Row gap={8}>
          <B2 style={{ color: theme.colors.coolGray2 }}>{"맞은 퀴즈 수"}</B2>
          <T5 style={{ color: theme.colors.primary }}>{"31"}</T5>
        </Row>
      </Column>
      {/* 정답 확인하기 */}
      <Column gap={20} horizonAlign="center" verticalAlign="center">
        {isDesktop && <NextQuizButton isQuizContent={false} />}
        <B4 style={{ color: theme.colors.coolGray4, cursor: "pointer" }}>
          {"다음에 이어서 풀기"}
        </B4>
      </Column>
    </>
  );
}
