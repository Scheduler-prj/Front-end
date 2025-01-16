import React, { useState, useRef } from "react";
import styled from "styled-components";
import {T6, T4, Cap1, Cap2} from "../../../../../styles/Typography";
import { ReactComponent as BackButton } from "../../../../../assets/icons/calendar/rightsidebar/BackButton.svg";

export const TaskCreation = ({ onBack }: { onBack: () => void }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        comment: "",
        color: "",
        isAllDay: false,
        alarm: true,
    });

    // 숨겨진 date input 을 조작하기 위한 ref
    const dateInputRef = useRef<HTMLInputElement>(null);

    // 날짜 선택 시 상태 업데이트
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, date: e.target.value });
    };

    // "시간 설정" 버튼 클릭 시 숨겨진 input 클릭
    const handleTimeSetClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.style.display = "block"; // input 보이기
            dateInputRef.current.focus(); // 포커스 이동
        }
    };

    // date input 포커스 해제 시 숨기기
    const handleDateBlur = () => {
        if (dateInputRef.current) {
            dateInputRef.current.style.display = "none"; // 다시 숨김
        }
    };

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            weekday: "short",
        };
        return date.toLocaleDateString("ko-KR", options).replace(/\./g, ". ");
    };

    const selectColor = (color: string) => {
        setFormData((prev) => ({
            ...prev,
            color,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("폼 데이터:", formData); // 디버깅용
    };

    return (
        <CreationWrapper>
            <Header>
                <BackButton onClick={onBack} />
                <Title>할 일 생성하기</Title>
            </Header>
            <Divider />
            <Form>
                <Label>
                    <TitleStyledInput
                        type="text"
                        placeholder="할 일 제목"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </Label>
                <Label>
                    <DateSelector>
                        {formData.date ? (
                            <span>{formatDate(formData.date)}</span>
                        ) : (
                            <Placeholder>연도. 월. 일.</Placeholder>
                        )}
                        <TimeSetButton
                            type="button"  //버튼 타입 지정
                            onClick={handleTimeSetClick}  // 버튼 클릭 시 숨겨진 input 트리거
                        >
                            시간 설정
                        </TimeSetButton>
                        <HiddenDateInput
                            ref={dateInputRef}
                            type="date"
                            value={formData.date}
                            onChange={handleDateChange}
                            onBlur={handleDateBlur} // 포커스 해제 시 숨김
                        />
                    </DateSelector>
                </Label>
                <Label>
                    <CommentInput
                        placeholder="코멘트 추가"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                </Label>
                <Divider />
                <ColorSelector>
                    <span>컬러 선택</span>
                    <ColorOptions>
                        {["red", "green", "blue", "yellow", "purple"].map((color) => (
                            <ColorCircle
                                key={color}
                                color={color}
                                selected={formData.color === color}
                                onClick={() => selectColor(color)}
                            />
                        ))}
                    </ColorOptions>
                </ColorSelector>
                <CheckboxWrapper>
                    <LabelInline>
                        <span>하루 종일</span>
                        <Checkbox
                            type="checkbox"
                            checked={formData.isAllDay}
                            onChange={(e) => setFormData({ ...formData, isAllDay: e.target.checked })}
                        />
                    </LabelInline>
                    <LabelInline>
                        <span>알림 받기</span>
                        <Checkbox
                            type="checkbox"
                            checked={formData.alarm}
                            onChange={(e) => setFormData({ ...formData, alarm: e.target.checked })}
                        />
                    </LabelInline>
                </CheckboxWrapper>
                <SubmitButton onClick={handleSubmit}>생성하기</SubmitButton>
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
`;

const DateSelector = styled.div`
    display: flex;
    justify-content: space-between; /* 왼쪽과 오른쪽 요소 간 간격 조정 */
    align-items: center; /* 세로축 중앙 정렬 */
    align-self: stretch; /* 부모 요소 너비에 맞춤 */
    min-width: 214px; /* 최소 너비 */
    max-width: 364px; /* 최대 너비 */
    width: 100%; /* 기본적으로 부모에 맞춤 */
    gap: 8px; /* 요소 간 간격 */
`;

const HiddenDateInput = styled.input`
    display: none; /* 기본적으로 숨김 */
    position: relative;
    margin-top: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
`;

const TimeSetButton = styled(Cap2).attrs({as: 'button'})`
    border: none; /* 테두리 제거 */
    border-radius: 4px; /* 둥근 모서리 */
    color: ${({ theme }) => theme.colors.warmGray2};; /* 텍스트 색상 */
`;

const Placeholder = styled.span`
    color: #aaa; /* 텍스트 색상 */
    font-size: 14px; /* 폰트 크기 */
    line-height: 1.5; /* 줄 높이 */
`;

const Title = styled(T6)`
`;

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
    padding: 24px;
    border-radius: 8px;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    align-self: stretch;
`;

const TitleStyledInput = styled(T4).attrs({ as: "input" })`
    width: 100%;
    color: #333;
    border: none;
    outline: none;
    transition: border-color 0.3s;
    background: ${({ theme }) => theme.colors.coolGray10};

    &:focus {
        border-bottom: 1px solid #6373ff;
    }w

    &::placeholder {
        color: #aaa;
    }
`;

const Label = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    width: 100%;
`;


const CommentInput = styled(Cap1).attrs({ as: "textarea" })`
    display: flex;
    height: 100px;
    //min-width: 214px;
    //max-width: 364px;
    width: 100%;
    padding: 16px;
    align-items: flex-start;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.coolGray10};
    border: 0.4px solid ${({ theme }) => theme.colors.warmGray2};
    gap: 10px;
    align-self: stretch;
`;

const ColorSelector = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

const ColorOptions = styled.div`
    display: flex;
    gap: 8px;
`;

const ColorCircle = styled.div<{ color: string; selected: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    border: ${(props) => (props.selected ? "2px solid black" : "1px solid #ccc")};
    cursor: pointer;
`;

const CheckboxWrapper = styled.div`
    display: flex;
    gap: 16px;
`;

const LabelInline = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background: #6373ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: #5364e4;
    }
`;