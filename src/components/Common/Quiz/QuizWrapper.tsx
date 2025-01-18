import { ReactNode } from "react";
import { styled } from "styled-components";

import { media } from "../../../styles/media";

export default function QuizWrapper({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  padding: 4.5% 3.17%;
  border-radius: 24px;
  background-color: #fff;
  margin-right: 1.95%;
  ${media.tablet`
    width: 100%;
`}
`;
