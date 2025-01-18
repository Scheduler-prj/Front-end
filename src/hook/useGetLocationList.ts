import { useLocation } from "react-router-dom";

const menus = [
	{ name: "quiz", path: "/quiz" },
	{ name: "quizResult", path: "/quiz/result" }
];

export const useGetLocationList = () => {
	const location = useLocation();

	const matchingMenu = menus.find((menu) => menu.path === location.pathname);
	return matchingMenu ? matchingMenu.name : null;
};
