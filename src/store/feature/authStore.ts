import { create } from "zustand";

// Zustand 상태 정의
interface AuthState {
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    clearAccessToken: () => void;
}

// Zustand Store 생성
export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,

    // Access Token 설정
    setAccessToken: (token) => {
        set({ accessToken: token });
        localStorage.setItem("accessToken", token); // localStorage에도 저장
    },

    // Access Token 제거
    clearAccessToken: () => {
        set({ accessToken: null });
        localStorage.removeItem("accessToken"); // localStorage에서도 삭제
    },
}));
