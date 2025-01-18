import { SolveQuizMain } from "../../components/SolveQuiz/SolveQuizMain";
import Row from "../../styles/Layouts/Row";
import styled from "styled-components";
import BookMark from "../../assets/icon/solveQuiz/bookMark.svg";
import { useState } from "react";
import useDeviceQueries from "../../hook/useDeviceQueries";
import TabletModePannel from "../../components/SolveQuiz/TotalQuizPannel/TabletModePannel";

export const QuizPage = () => {
  const { isTablet } = useDeviceQueries();
  const [isPanelOpen, setIsPanelOpen] = useState(false); // 상태관리로 빼야함 -> 패널이 오픈되었는지 여부는

  const OpenPannel = () => {
    setIsPanelOpen(!isPanelOpen);
  };
  return (
    <>
      <Overlay isVisible={isPanelOpen} onClick={OpenPannel} />
      <Row>
        <SolveQuizMain />
        {isTablet && (
          <Test isPanelOpen={isPanelOpen}>
            <IMGTEST src={BookMark} onClick={() => OpenPannel()} />
            {isPanelOpen && <TabletModePannel />}
          </Test>
        )}
      </Row>
    </>
  );
};

const Test = styled.div<{ isPanelOpen: boolean }>`
  position: fixed;
  height: 90%;
  width: ${({ isPanelOpen }) => (isPanelOpen ? "330px" : "30px")};
  background-color: #fff;
  border-radius: 20px 0px 0px 20px;
  z-index: 10;
  transform: translate(0%, -50%);
  top: 50%;
  right: 0;
  transition: bottom 0.3s ease-in-out;
`;

const IMGTEST = styled.img`
  position: absolute;
  left: -70px;
  top: 160px;
  z-index: 6;
  cursor: pointer;
`;
const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: opacity 0.3s ease;
`;
