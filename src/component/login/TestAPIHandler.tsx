import { useEffect, useState } from "react";
import axios from "axios";

export const TestAPIHandler = () => {
    const [data, setData] = useState<any>(null); // 응답 데이터를 저장 (any 타입 허용)
    const [error, setError] = useState<string | null>(null); // 에러 메시지 타입을 string | null로 설정

    useEffect(() => {
        // axios를 사용한 GET 요청
        axios
            .get("url/test")
            .then((response) => {
                console.log("API 응답 데이터:", response.data);
                setData(response.data); // 데이터 저장
            })
            .catch((error) => {
                console.error("API 호출 실패:", error);
                setError("API 호출 중 문제가 발생했습니다."); // 에러 메시지 저장
            });
    }, []);

    return (
        <div>
            <h1>Test API 결과</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>로딩 중...</p>
            )}
        </div>
    );
};
