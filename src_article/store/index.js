import { createStore } from "redux";
import combineReducers from "../reducer/index"







const store = createStore(combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;