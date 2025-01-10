import { create } from "zustand";
// import axios from "axios";

// 루틴 데이터 타입 정의
interface Routine {
    routine_id: number;
    title: string;
    dtow_id: number;
    alarm: boolean;
    comment: string;
    isClear: boolean;
}

// Zustand Store 인터페이스 정의
interface RoutineStore {
    routines: Routine[];
    fetchRoutines: () => Promise<void>; // 루틴 데이터를 가져오는 함수
    toggleRoutine: (id: number) => void; // 루틴 완료 상태를 토글하는 함수
}

// 더미 데이터 정의
const dummyRoutines: Routine[] = [
    {
        routine_id: 1,
        title: "테스트",
        dtow_id: 1,
        alarm: false,
        comment: "매일 아침 한 잔",
        isClear: true,
    },
    {
        routine_id: 2,
        title: "영양제 챙겨먹기",
        dtow_id: 1,
        alarm: true,
        comment: "저녁 식사 후",
        isClear: false,
    },
];

// Zustand Store 생성
export const useRoutinesStore = create<RoutineStore>((set) => ({
    routines: [],

    // 루틴 데이터 가져오기
    fetchRoutines: async () => {
        try {
            // 나중에 API로 교체 가능 -> 나중에 axios 패키지 설치 후 axios 함수를 통해 데이터 가져오기
            const response = await new Promise<{ data: Routine[] }>((resolve) =>
                setTimeout(() => resolve({ data: dummyRoutines }), 500)
            );
            set({ routines: response.data });
        } catch (error) {
            console.error("루틴 데이터를 가져오는 데 실패했습니다.", error);
        }
    },

    // 루틴 완료 상태 토글
    toggleRoutine: (id: number) => {
        set((state) => ({
            routines: state.routines.map((routine) =>
                routine.routine_id === id
                    ? { ...routine, isClear: !routine.isClear }
                    : routine
            ),
        }));
    },
}));

