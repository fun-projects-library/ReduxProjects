import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import searchReducer from "./searchReducer"




export default combineReducers({
    articleReducer,
    searchReducer
})

