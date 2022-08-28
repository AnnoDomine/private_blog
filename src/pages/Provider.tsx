import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import Routing from "./Routing";

const Provider = () => {
    return (
        <>
            <BrowserRouter>
                {/* <ReduxProvider store={store}> */}
                <Routing />
                {/* </ReduxProvider> */}
            </BrowserRouter>
        </>
    );
};

export default Provider;
