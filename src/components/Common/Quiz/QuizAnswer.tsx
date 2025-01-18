import * as S from "./style";
import Column from "../../../styles/Layouts/Column";
import Row from "../../../styles/Layouts/Row";
import { theme } from "../../../styles/theme";
import { B3, B6, B7 } from "../../../styles/Typography";
import { useGetLocationList } from "../../../hook/useGetLocationList";

export default function QuizAnswer() {
	const pageType = useGetLocationList();
	return (
		<S.QuizAnswer pageType={pageType}>
			<Column gap={12}>
				<Row gap={10} verticalAlign="center" horizonAlign="center">
					<S.Number>
						<B6 style={{ color: "#fff" }}>{"1"}</B6>
					</S.Number>
					<B3 style={{ color: theme.colors.primary }}>{"정답"}</B3>
				</Row>
				<B7 style={{ color: theme.colors.coolGray2 }}>
					{
						"idunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit."
					}
				</B7>
			</Column>
		</S.QuizAnswer>
	);
}
