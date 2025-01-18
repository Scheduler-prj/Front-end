import { styled } from "styled-components";
import Row from "../../../styles/Layouts/Row";
import { B1, B3, B6, T2 } from "../../../styles/Typography";
import { theme } from "../../../styles/theme";
import Column from "../../../styles/Layouts/Column";
import SelectBtn from "../../Common/SelectBtn";
import { useEffect, useRef, useState } from "react";

export default function QuizItem() {
  const QuizNum = [1, 2, 3, 4, 5];
  const parentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight);
    }
  }, []);

  return (
    <Row gap={40} ref={parentRef}>
      <Column horizonAlign="center" verticalAlign="center">
        <Num horizonAlign="center" verticalAlign="center">
          <T2 style={{ color: theme.colors.coolGray4 }}>{1}</T2>
        </Num>
        <Line height={height} />
      </Column>
      <Column gap={40}>
        <B1>{"1번 퀴즈 문제"}</B1>
        {QuizNum.map((number) => (
          <Row gap={10}>
            <SelectBtn
              FontSize={B6}
              buttonType="default"
              width={24}
              num={number}
            />
            <B3>{"선택한 정답"}</B3>
          </Row>
        ))}
      </Column>
    </Row>
  );
}

const Num = styled(Column)`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.coolGray10};
`;

const Line = styled(Column)<{ height: number }>`
  width: 8px;
  height: ${({ height }) => `${height}px`};
  background-color: ${({ theme }) => theme.colors.coolGray10};
`;
