import { useState } from "react";

import iconQ from "../../../assets/icon/solveQuiz/iconQ.svg";
import { B2, T2, T6 } from "../../../styles/Typography";
import * as S from "./style";
import Row from "../../../styles/Layouts/Row";
import { SolveQuizStore } from "../SolveQuizStore";
import NextQuizButton from "../../Common/Quiz/NextQuizButton";
import QuizWrapper from "../../Common/Quiz/QuizWrapper";
import QuizAnswer from "../../Common/Quiz/QuizAnswer";

export const QuizContent = () => {
  const { selectedQuiz, setSelectedQuiz } = SolveQuizStore();

  return (
    <QuizWrapper>
      {/* 이것도 컴포넌트 - 헤더 로 뺄까? */}
      <T6>{"문항 10 / 15"}</T6>
      <Row
        gap={16}
        verticalAlign="center"
        style={{
          marginTop: "72px",
          marginBottom: "56px",
        }}
      >
        <img src={iconQ} />
        <T2>{"퀴즈 내용"}</T2>
      </Row>

      <Row
        gap={32}
        style={{
          flexWrap: "wrap",
          marginLeft: "58px",
          marginBottom: "72px",
        }}
      >
        {[1, 2, 3, 4, 5].map((id) => (
          <Row
            key={id}
            gap={12}
            verticalAlign="center"
            style={{ width: "calc(50% - 16px)" }}
          >
            <S.QuizBtn
              onClick={() => setSelectedQuiz(id)}
              selected={selectedQuiz === id}
            >
              <T6>{id}</T6>
            </S.QuizBtn>
            <B2>{`문항 ${id}`}</B2>
          </Row>
        ))}
      </Row>
      {/* 정답 확인 후 로직 필요 */}
      <Row verticalAlign={"bottom"}>
        <QuizAnswer />
        <NextQuizButton isQuizContent={true} />
      </Row>
    </QuizWrapper>
  );
};
