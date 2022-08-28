import { Route, Routes } from "react-router-dom";
import BlogList from "../components/Blog/BlogList/BlogList";
import Main from "./Main/Main";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<BlogList />} />
                </Route>
            </Routes>
        </>
    );
};

export default Routing;
