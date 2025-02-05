import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginSuccessHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // axios 를 사용한 GET 요청
        axios.get("url/loginSuccess")
            .then((response) => {
                const data = response.data;  // axios 는 응답 데이터를 `response.data`에 저장
                console.log("로그인 성공:", data);

                // 현재 응답 데이터가 "ok"일 경우를 처리
                if (response.data === "ok") {
                    console.log("로그인 성공: 단순 확인 응답");
                    // 추후 accessToken 이 추가되면 여기에 저장 코드 추가
                    navigate("/calendar"); // 메인 페이지로 이동
                } else {
                    console.error("예상치 못한 응답 데이터:", response.data);
                }
            })
            .catch((error) => {
                console.error("로그인 처리 실패:", error);
            });
    }, [navigate]);

    return <div>로그인 성공! 메인 페이지로 이동 중</div>;
};
