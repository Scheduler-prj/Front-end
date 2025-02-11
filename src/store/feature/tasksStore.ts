// 캘린더 우측 사이드바에 할일에 관한 상태를 관리하기 위한 store 입니다.

import {create} from "zustand/react";
import axios from "axios"; // axios 직접 가져오기

export interface Task {
    todoId: number;
    title: string;
    todoAt: string; // 날짜는 문자열로 반환됨
    color: string;
    planAlarm: boolean;
    planComment: string;
    completed: boolean; // 작업 완료 여부 (새 필드 추가)
}

interface TasksState {
    tasks: Task[];
    // fetchTasks: (year: number, month: number) => Promise<void>; // 실제 데이터가 들어왔을 때 교체
    fetchTasks: () => void;
    toggleTask: (id: number) => void;
    submitTask: (id: number) => void;
    createTask: (newTask: Omit<Task, "todoId">) => Promise<void>; // 새 투두 생성
}

// 🟢 더미 데이터
const dummyTasks: Task[] = [
    { todoId: 1, title: "리액트 공부하기", todoAt: "2/12", color: "#FFD8DA", planAlarm: true, planComment: "", completed: false },
    { todoId: 2, title: "잠자기", todoAt: "2/12", color: "#FFE8C9", planAlarm: false, planComment: "", completed: true },
    { todoId: 3, title: "스프링 공부하기", todoAt: "2/21", color: "#D9E2FF" , planAlarm: true, planComment: "", completed: false },
];

export const useTasksStore = create<TasksState>((set) => ({
    tasks: [],

    // // API 호출로 데이터 가져오기 -> 실제 데이터 불러올때 사용
    // fetchTasks: async (year, month) => {
    //     try {
    //         const response = await axios.get(`/api/v1/todo/${year}/${month}`);
    //         set({ tasks: response.data });
    //     } catch (error) {
    //         console.error("Error fetching tasks:", error);
    //     }
    // },

    // 🟢 API 없이 더미 데이터를 불러오는 함수
    fetchTasks: () => {
        set({ tasks: dummyTasks });
    },

    // toggleTask 를 통해 상태 변경 처리
    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.todoId === id
                    ? { ...task, completed: !task.completed } // completed 상태 토글
                    : task
            ),
        })),

    // 성과 제출
    submitTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.todoId === id
                    ? { ...task, planComment: "Submitted" } // 임의의 성과 제출 로직
                    : task
            ),
        })),

    // axios 를 사용하여 새로운 할 일 생성
    createTask: async (newTask) => {
        try {
            const response = await axios.post("/api/v1/todo", newTask, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`, // 토큰 포함
                    "Content-Type": "application/json",
                },
            });
            const createdTodoId = response.data; // 응답으로 반환된 todoId

            set((state: TasksState): { tasks: Task[] } => ({
                tasks: [
                    ...state.tasks,
                    { ...newTask, todoId: createdTodoId }, // 스프레드 연산자 뒤에 todoId 추가
                ],
            }));
        } catch (error) {
            console.error("Error creating task:", error);
        }
    },
}));