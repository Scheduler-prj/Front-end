import React from "react";
import styled from "styled-components";
import {ReactComponent as KakaoIcon} from "../../assets/login/KakaoIcon.svg";
import {ReactComponent as NaverIcon} from "../../assets/login/NaverIcon.svg";
import {ReactComponent as GoogleIcon} from "../../assets/login/GoogleIcon.svg";
import {ReactComponent as CloseBtn} from "../../assets/login/CloseBtn.svg";

interface LoginModalProps {
    onClose: () => void; // 모달 닫기 함수
}

export const LoginModal = ({onClose}: LoginModalProps) => {
    return (
        <Overlay>
            <ModalContainer>
                <CloseButton>
                    <CloseBtn onClick={onClose}/>
                </CloseButton>
                <Title>Log in</Title>
                <Subtitle>SNS 계정으로 간편 가입하기</Subtitle>
                <ButtonContainer>
                    <LoginButton>
                        <KakaoIcon/>
                        <span>카카오로 로그인</span>
                    </LoginButton>
                    <LoginButton>
                        <NaverIcon/>
                        <span>네이버로 로그인</span>
                    </LoginButton>
                    <LoginButton>
                        <GoogleIcon/>
                        <span>구글로 로그인</span>
                    </LoginButton>
                </ButtonContainer>
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

const ModalContainer = styled.div`
    display: flex;
    padding: 40px 88px 64px 88px;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #6373FF;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888888;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    cursor: pointer;

    img {
        width: 48px;
        height: 48px;
    }

    span {
        font-size: 14px;
        color: #333;
    }

    &:hover {
        opacity: 0.8;
    }
`;