import { useEffect, useState } from "react";

const getWindowDimension = (): {
    width: number;
    height: number;
} => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};

export const useWindowSize = (): {
    width: number;
    height: number;
} => {
    const [windowDimension, setWindowDimension] = useState<{ width: number; height: number }>(getWindowDimension());

    useEffect(() => {
        function handleResize() {
            setWindowDimension(getWindowDimension());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return windowDimension;
};

export default useWindowSize;
