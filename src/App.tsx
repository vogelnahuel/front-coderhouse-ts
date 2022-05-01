import Router from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store";
export const App = () => {

    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    );
  };