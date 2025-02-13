import { create } from "zustand";

// Zustand 상태 정의
interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    clearAccessToken: () => void;
    userInfo: any | null;  // 사용자 정보 저장
    fetchUserInfo: () => Promise<void>; // 사용자 정보 가져오는 함수 추가
}

// Zustand Store 생성
export const useAuthStore = create<AuthState>((set, get) => ({
    isLoggedIn: !!localStorage.getItem("accessToken"), // 새로고침 시 localStorage에서 가져오기
    accessToken: localStorage.getItem("accessToken"), // 저장된 토큰 가져오기
    userInfo :null,

    // Access Token 설정
    setAccessToken: (token) => {
        set({ isLoggedIn: true, accessToken: token  });  // 로그인 상태 유지
        localStorage.setItem("accessToken", token); // localStorage에도 저장
        get().fetchUserInfo();  // 로그인 후 사용자 정보 가져오기
    },

    // Access Token 제거
    clearAccessToken: () => {
        set({ isLoggedIn: false, accessToken: null });  // 로그아웃시 사용할 것 같네요.
        localStorage.removeItem("accessToken"); // localStorage에서도 삭제
    },

    // ✅ 사용자 정보 가져오기 API 호출
    fetchUserInfo: async () => {
        const token = get().accessToken || localStorage.getItem("accessToken");
        if (!token) return;

        try {
            const response = await fetch("http://localhost:8080/findOne", {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.ok) {
                const userData = await response.json();
                set({ userInfo: userData });
                console.log("✅ 사용자 정보:", userData);
            } else {
                console.error("❌ 사용자 정보 불러오기 실패", response.status);
            }
        } catch (error) {
            console.error("❌ 사용자 정보 요청 중 오류 발생:", error);
        }
    },
}));
