import * as S from "./style";
import { DurationTime } from "./DurationTime/DurationTime";
import CommonContent from "./CommonContent";

export default function TabletModePannel() {
  return (
    <S.TotalQuizPannelWrapperTabeltMode isPannelOpen={true}>
      <CommonContent />
    </S.TotalQuizPannelWrapperTabeltMode>
  );
}
