import React from "react";
import styled from "styled-components";
import { ReactComponent as KakaoIcon } from "../../assets/login/KakaoIcon.svg";
import { ReactComponent as NaverIcon } from "../../assets/login/NaverIcon.svg";
import { ReactComponent as GoogleIcon } from "../../assets/login/GoogleIcon.svg";
import { ReactComponent as CloseBtn } from "../../assets/login/CloseBtn.svg";

interface LoginModalProps {
    onClose: () => void; // 모달 닫기 함수
}

export const LoginModal = ({ onClose }: LoginModalProps) => {
    return (
        <Overlay>
            <ModalContainer>
                <CloseBtn onClick={onClose}/>
                <Title>Log in</Title>
                <Subtitle>SNS 계정으로 간편 가입하기</Subtitle>
                <LoginOptions>
                    <LoginButton>
                        <KakaoIcon />
                        카카오로 로그인
                    </LoginButton>
                    <LoginButton>
                        <NaverIcon />
                        네이버로 로그인
                    </LoginButton>
                    <LoginButton>
                        <GoogleIcon />
                        구글로 로그인
                    </LoginButton>
                </LoginOptions>
            </ModalContainer>
        </Overlay>
    );
};

// 모달 오버레이
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25); /* 반투명 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// 모달 컨테이너
const ModalContainer = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 32px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
`;

// 닫기 버튼
const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

// 타이틀
const Title = styled.h2`
    font-size: 24px;
    color: #2d2d2d;
    margin-bottom: 16px;
`;

// 서브 타이틀
const Subtitle = styled.p`
    font-size: 14px;
    color: #7d7d7d;
    margin-bottom: 32px;
`;

// 로그인 옵션 버튼 컨테이너
const LoginOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

// 로그인 버튼
const LoginButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background-color: #eaeaea;
    }
`;