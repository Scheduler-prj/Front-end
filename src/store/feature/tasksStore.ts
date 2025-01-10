// 캘린더 우측 사이드바에 할일에 관한 상태를 관리하기 위한 store 입니다.

import {create} from "zustand/react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
    date: string;
}

interface TasksState {
    tasks: Task[];
    fetchTasks: () => Promise<void>;
    toggleTask: (id: number) => void;
    submitTask: (id: number) => void;
}

export const useTasksStore = create<TasksState>((set) => ({
    tasks: [],
    fetchTasks: async () => {
        const response = await fetch("/api/tasks"); // 할 일 API 호출
        const data = await response.json();
        set({ tasks: data });
    },
    toggleTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),
    submitTask: (id) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
            ),
        })),
}));
