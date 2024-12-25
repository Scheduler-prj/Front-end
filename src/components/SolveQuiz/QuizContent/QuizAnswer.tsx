import Column from "../../../styles/Layouts/Column";
import Row from "../../../styles/Layouts/Row";
import { B3, B6, B7 } from "../../../styles/Typography";
import { theme } from "../../../styles/theme";
import * as S from "./style";

export const QuizAnswer = () => {
  return (
    <S.QuizAnswer>
      <Column gap={12}>
        <Row gap={10} verticalAlign="center" horizonAlign="center">
          <S.Number style={{ color: "#fff" }}>
            <B6 style={{ textAlign: "center" }}>{"1"}</B6>
          </S.Number>
          <B3>{"정답"}</B3>
        </Row>
        <B7 style={{ color: theme.colors.coolGray2 }}>
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit."
          }
        </B7>
      </Column>
    </S.QuizAnswer>
  );
};
