import { useEffect } from "react";
import { useAuthStore } from "../../store/feature/authStore";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginSuccessHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("✅ LoginSuccessHandler 실행됨");

        // ✅ 쿠키에서 accessToken 가져오기 (자동 포함)
        axios.get("http://localhost:8080/check-auth", { withCredentials: true })  // 나중에 배포 서버 URL 로 교체
            .then((response) => {
                console.log("✅ 응답 데이터:", response.data);

                if (response.data.accessToken) {
                    useAuthStore.getState().setAccessToken(response.data.accessToken);
                    console.log("✅ Zustand 저장된 Access Token:", useAuthStore.getState().accessToken);
                    navigate("/calendar");
                } else {
                    console.error("❌ Access Token이 없습니다.");
                    navigate("/");
                }
            })
            .catch((error) => {
                console.error("❌ 로그인 요청 중 오류 발생:", error);
                navigate("/");
            });
    }, []);

    return null;
};


//
// import { useEffect } from "react";
// import { useAuthStore } from "../../store/feature/authStore";
// import { useNavigate } from "react-router-dom";
//
// export const LoginSuccessHandler = () => {
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         // ✅ 현재 URL에서 accessToken 가져오기
//         const params = new URLSearchParams(window.location.search);
//         const accessToken = params.get("accessToken");
//
//         if (accessToken) {
//             console.log("✅ Access Token:", accessToken);
//             useAuthStore.getState().setAccessToken(accessToken);
//             navigate("/calendar"); // 로그인 성공 후 이동할 페이지
//         } else {
//             console.error("❌ Access Token이 없습니다.");
//             navigate("/"); // 로그인 실패 시 메인 페이지로 이동
//         }
//     }, []);
//
//     return null;
// };
