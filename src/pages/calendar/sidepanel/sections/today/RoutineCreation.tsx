import React, {useState} from "react";
import styled from "styled-components";
import {T6, T4, Cap1} from "../../../../../styles/Typography";
import {ReactComponent as BackButton} from "../../../../../assets/icons/calendar/rightsidebar/BackButton.svg";

export const RoutineCreation = ({ onBack }: { onBack: () => void }) => {
    const [selectedDays, setSelectedDays] = useState<string[]>([]); // 선택된 요일 상태

    const toggleDay = (day: string) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day)); // 이미 선택된 경우 제거
        } else {
            setSelectedDays([...selectedDays, day]); // 선택되지 않은 경우 추가
        }
    };

    return (
        <CreationWrapper>
            <Header>
                <BackButton onClick={onBack} />
                <Title>루틴 생성하기</Title>
            </Header>
            <Divider />
            <Form>
                <Label>
                    <TitleStyledInput
                        type="text"
                        placeholder="루틴 제목"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "루틴 제목")}
                    />
                </Label>
                <Label>
                    <CommentStyleInput
                        type="text"
                        placeholder="코멘트 추가"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) => (e.target.placeholder = "코멘트 추가")}
                    />
                </Label>
                <Divider />
                <DaySelector>
                    <InputTitle>요일</InputTitle>
                    <DayList>
                        {["월", "화", "수", "목", "금", "토", "일"].map((day, index) => (
                            <DayButton
                                type="button"
                                key={index}
                                selected={selectedDays.includes(day)} // 선택 여부에 따라 스타일 적용
                                onClick={() => toggleDay(day)}
                            >
                                {day}
                            </DayButton>
                        ))}
                    </DayList>
                </DaySelector>
                <LabelInline>
                    <InputTitle>알림</InputTitle>
                    <Checkbox type="checkbox" />
                </LabelInline>
                <SubmitButton>생성하기</SubmitButton>
            </Form>
        </CreationWrapper>
    );
};

const CreationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 20px;
    background: #fff; /* White */
    box-shadow: 0px 4px 12px 0px rgba(239, 239, 246, 0.8);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    align-self: stretch;
`;

const Title = styled(T6)`
`;

// T4 스타일을 사용한 루틴 제목 Input
const TitleStyledInput = styled(T4).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }

    &::placeholder {
        color: #aaa;
    }
`;

// Cap1 스타일을 사용한
const CommentStyleInput = styled(Cap1).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }

    &::placeholder {
        color: #aaa;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d4d6eb;
    margin: 8px 0;
`;

const Form = styled.form`
    display: flex;
    background: ${({ theme }) => theme.colors.coolGray10};
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    border-radius: 8px;
    gap: 24px;
    width: 100%;
    align-self: stretch;
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
`;

const LabelInline = styled.div`
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    gap: 8px; /* "알림"과 체크박스 사이의 간격 */
`;

const InputTitle = styled(Cap1)`
`;

const DaySelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const DayList = styled.div`
    display: flex;
    gap: 8px;
`;

const DayButton = styled.button<{ selected: boolean }>`
    width: 100%;
    height: 100%;
    padding: 8px 12px;
    border: none;
    border-radius: 50%;
    background-color: ${(props) => (props.selected ? "#6373ff" : "#fff")}; /* 선택 여부에 따라 배경색 변경 */
    color: ${(props) => (props.selected ? "#fff" : "#6373ff")}; /* 선택 여부에 따라 텍스트 색 변경 */
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.selected ? "#6373ff" : "#fff")}; /* 선택 상태에 따른 hover 색상 */
    }
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    accent-color: #6373ff;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    background-color: #6373ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #5364e4;
    }
`;
