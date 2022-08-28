import { Outlet } from "react-router-dom";
import useWindowSize from "../../utils/hooks/useWindowSize";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const headerHeight = 60;

const Main = () => {
    const { width, height } = useWindowSize();
    return (
        <>
            <div style={{ width: width, height: height, overflow: "hidden" }}>
                <Header height={headerHeight} />
                <div
                    style={{
                        overflowY: "auto",
                        overflowX: "hidden",
                        maxHeight: height,
                    }}
                >
                    <div
                        style={{
                            minHeight: height - 100 - headerHeight,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            marginTop: `${headerHeight}px`,
                        }}
                    >
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main;
