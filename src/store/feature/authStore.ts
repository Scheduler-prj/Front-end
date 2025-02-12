import { create } from "zustand";

// Zustand 상태 정의
interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    clearAccessToken: () => void;
}

// Zustand Store 생성
export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: !!localStorage.getItem("accessToken"), // 새로고침 시 localStorage에서 가져오기
    accessToken: localStorage.getItem("accessToken"), // 저장된 토큰 가져오기

    // Access Token 설정
    setAccessToken: (token) => {
        set({ isLoggedIn: true, accessToken: token  });  // 로그인 상태 유지
        localStorage.setItem("accessToken", token); // localStorage에도 저장
    },

    // Access Token 제거
    clearAccessToken: () => {
        set({ isLoggedIn: false, accessToken: null });  // 로그아웃시 사용할 것 같네요.
        localStorage.removeItem("accessToken"); // localStorage에서도 삭제
    },
}));
