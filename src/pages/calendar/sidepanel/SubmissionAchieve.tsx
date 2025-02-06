import React, { useState } from 'react';
import styled from 'styled-components';
import { T6, B6 } from '../../../styles/Typography';

interface SubmissionProps {
    task: {
        todoId: number;
        title: string;
        todoAt: string;
    };
    onBack: () => void;
    onSubmit: (comment: string, file: File | null, quizEnabled: boolean) => void;
}

export const SubmissionAchieve = ({ task, onBack, onSubmit }: SubmissionProps) => {
    const [comment, setComment] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [quizEnabled, setQuizEnabled] = useState(true);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        onSubmit(comment, file, quizEnabled);
    };

    return (
        <Wrapper>
            <Header>
                <BackButton onClick={onBack}>&lt; 뒤로가기</BackButton>
                <Title>성과 제출</Title>
            </Header>
            <Divider />
            <TaskInfo>
                <TaskDate>{task.todoAt}</TaskDate>
                <TaskTitle>{task.title}</TaskTitle>
            </TaskInfo>
            <Divider />
            <Section>
                <SectionLabel>코멘트</SectionLabel>
                <CommentInput
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="코멘트를 입력하세요..."
                />
            </Section>
            <Section>
                <SectionLabel>성과 제출</SectionLabel>
                <FileUpload>
                    <label htmlFor="file-upload">파일을 업로드해주세요</label>
                    <input id="file-upload" type="file" onChange={handleFileChange} />
                </FileUpload>
            </Section>
            <Section>
                <SectionLabel>퀴즈 생성 여부</SectionLabel>
                <CheckboxWrapper>
                    <Checkbox
                        type="checkbox"
                        checked={quizEnabled}
                        onChange={() => setQuizEnabled(!quizEnabled)}
                    />
                    <span>퀴즈 생성</span>
                </CheckboxWrapper>
            </Section>
            <SubmitButton onClick={handleSubmit}>성과 제출하기</SubmitButton>
        </Wrapper>
    );
};

// 스타일 코드는 그대로 유지
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    min-width: 310px;
    max-width: 460px;
    padding: 24px;
    border-radius: 20px;
    background: #fff;
    gap: 22px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    color: #6373ff;
    cursor: pointer;
`;

const Title = styled(T6)``;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #d4d6eb;
`;

const TaskInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TaskDate = styled(B6)`
    background: #f0f0f0;
    padding: 4px 8px;
    border-radius: 4px;
`;

const TaskTitle = styled(T6)``;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const SectionLabel = styled(B6)``;

const CommentInput = styled.textarea`
    width: 100%;
    padding: 8px;
    border: 1px solid #d4d6eb;
    border-radius: 8px;
`;

const FileUpload = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        color: #6373ff;
        cursor: pointer;
    }

    input {
        display: none;
    }
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Checkbox = styled.input``;

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background: #6373ff;
    color: white;
    cursor: pointer;
`;
