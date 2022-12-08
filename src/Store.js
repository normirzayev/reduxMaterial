import { createStore } from "redux";
import rootReducer from "./REDUX/reducer/Index";

const store = createStore(rootReducer);
export default store;
