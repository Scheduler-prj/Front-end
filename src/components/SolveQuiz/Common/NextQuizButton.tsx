import { T6 } from "../../../styles/Typography";
import { SolveQuizStore } from "../SolveQuizStore";
import { theme } from "../../../styles/theme";

import * as S from "./style";
import useDeviceQueries from "../../../hook/useDeviceQueries";

const NextQuizButton = ({ isQuizContent }: { isQuizContent: boolean }) => {
  const { isChecked } = SolveQuizStore();
  return (
    <S.CheckAnswer
      isChecked={isChecked}
      isQuizContent={isQuizContent}
    >
      <T6
        style={{
          color: isChecked ? "#fff" : theme.colors.coolGray4,
          cursor: isChecked ? "pointer" : "not-allowed",
        }}
      >
        {isChecked ? "다음 문제" : "정답 확인하기"}
      </T6>
    </S.CheckAnswer>
  );
};
export default NextQuizButton;
