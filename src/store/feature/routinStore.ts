import { create } from "zustand";
// import axios from "axios";

// 루틴 조회 API 데이터 타입 정의
interface Routine {
    routine_id: number;
    title: string;
    dtow_id: number;
    alarm: boolean;
    comment: string;
    isClear: boolean;
}

// 루틴 생성 요청 데이터 형식
interface RoutinePayload {
    title: string;
    dtow_id: number;
    alarm: boolean;
    comment: string;
}

// Zustand Store 인터페이스 정의
interface RoutineStore {
    routines: Routine[];
    fetchRoutines: () => Promise<void>; // 루틴 데이터를 가져오는 함수
    toggleRoutine: (id: number) => void; // 루틴 완료 상태를 토글하는 함수
    addRoutine: (newRoutine: RoutinePayload) => Promise<void>; // 루틴 추가 함수
}

// // 더미 데이터 정의
// const dummyRoutines: Routine[] = [
//     {
//         routine_id: 1,
//         title: "테스트",
//         dtow_id: 1,
//         alarm: false,
//         comment: "매일 아침 한 잔",
//         isClear: true,
//     },
//     {
//         routine_id: 2,
//         title: "영양제 챙겨먹기",
//         dtow_id: 1,
//         alarm: true,
//         comment: "저녁 식사 후",
//         isClear: false,
//     },
// ];

// Zustand Store 생성
export const useRoutinesStore = create<RoutineStore>((set) => ({
    routines: [],

    /* 루틴 데이터 가져오기 -> 루틴 관련 API 가 생성되면 const currentState ~ return; 까지 지우고
    *  response 부분에서 axios 통신을 통해서 유저 데이터 가져오기
    * */
    fetchRoutines: async () => {
        try {
            const currentState = useRoutinesStore.getState().routines;
            if (currentState.length > 0) {
                console.log("이미 루틴 데이터가 있음. fetchRoutines 호출 중단.");
                return;
            }

            // 나중에 실제 API 요청으로 교체
            const response = await new Promise<{ data: Routine[] }>((resolve) =>
                setTimeout(() => resolve({ data: [] }), 500)
            );
            console.log("가져온 데이터: ", response.data);

            set({ routines: response.data });
        } catch (error) {
            console.error("루틴 데이터를 가져오는 데 실패했습니다.", error);
        }
    },

    // 루틴 완료 상태 토글
    /*
    * 마찬가지로 루틴 API 가 준비되면 아래와 같은 형식으로 API 요청
    *
    * toggleRoutine: async (id) => {
        try {
            const routine = useRoutinesStore.getState().routines.find((r) => r.routine_id === id);
            if (!routine) throw new Error("루틴을 찾을 수 없습니다.");

            const updatedRoutine = { ...routine, isClear: !routine.isClear };
            await axios.put(`/api/routines/${id}`, updatedRoutine);

            set((state) => ({
                routines: state.routines.map((r) =>
                    r.routine_id === id ? updatedRoutine : r
                ),
            }));
        } catch (error) {
            console.error("루틴 상태 토글 중 오류가 발생했습니다:", error);
        }
    },
    * */
    toggleRoutine: (id: number) => {
        set((state) => ({
            routines: state.routines.map((routine) =>
                routine.routine_id === id
                    ? { ...routine, isClear: !routine.isClear }
                    : routine
            ),
        }));
    },

    // 루틴 생성 (목데이터 기반)
    /* 새로운 루틴 추가하는 부분 axios 통신 사용시 post 사용*/
    addRoutine: async (newRoutine: RoutinePayload) => {
        try {
            // 목데이터 ID 생성 (실제 API 에서는 서버가 ID를 생성)
            const newId = Math.max(0, ...useRoutinesStore.getState().routines.map((r) => r.routine_id)) + 1;
            const routineWithId = { ...newRoutine, routine_id: newId, isClear: false };

            // 상태 업데이트
            set((state) => ({
                routines: [...state.routines, routineWithId],
            }));

            // 나중에 실제 API 연동 시 아래 코드를 활성화
            /*
            const response = await axios.post("/api/routine", newRoutine, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    "Content-Type": "application/json",
                },
            });
            set((state) => ({
                routines: [...state.routines, response.data],
            }));
            */
            console.log("새 루틴 추가:", routineWithId);
        } catch (error) {
            console.error("루틴 생성 중 오류:", error);
            alert("루틴 생성에 실패했습니다. 다시 시도해주세요."); // 사용자에게 알림
        }
    },
}));

