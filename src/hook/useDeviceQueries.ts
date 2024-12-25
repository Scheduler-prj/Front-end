import { useMediaQuery } from "react-responsive";

const useDeviceQueries = () => {
  const isDesktop = useMediaQuery({
    maxDeviceWidth: 1920,
    minDeviceWidth: 1280,
  });
  const isTablet = useMediaQuery({ maxDeviceWidth: 1279, minDeviceWidth: 768 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 767, minDeviceWidth: 360 });

  return { isDesktop, isTablet, isMobile };
};

export default useDeviceQueries;
