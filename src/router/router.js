import React, {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import {NamedLazy} from '../utils/NamedLazy';
import {Layout} from "../component/Layout";
import {LoginSuccessHandler} from "../component/login/LoginSuccessHandler";
import { TestAPIHandler } from "../component/login/TestAPIHandler";

// 동적으로 로드할 페이지
const Calendar = NamedLazy(() => import("../pages/calendar/CalendarPage"), "CalendarPage");
const QuizList = NamedLazy(() => import("../pages/quiz-list/QuizListPage"), "QuizListPage");
const Dashboard = NamedLazy(() => import("../pages/dashboard/DashboardPage"), "DashboardPage");
const Result = NamedLazy(() => import("../pages/results/ResultPage"), "ResultPage");
const Quiz = NamedLazy(() => import("../pages/solve-quiz/QuizPage"), "QuizPage");

export const router = createBrowserRouter([
    {
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Calendar/>
                    </Suspense>
                )
            },
            {
                path : "calendar",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Calendar/>
                    </Suspense>
                )
            },
            {
                path : "quiz-list",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <QuizList/>
                    </Suspense>
                )
            },
            {
                path : "dashboard",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard/>
                    </Suspense>
                )
            },
            {
                path : "result",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Result/>
                    </Suspense>
                )
            },
            {
                path : "quiz",
                element : (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Quiz/>
                    </Suspense>
                )
            },
            // LoginSuccessHandler 추가
            {
                path : "test",
                element : <TestAPIHandler />, // 동적 로드 불필요
            }
        ]
    }
])
