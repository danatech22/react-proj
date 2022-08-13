import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import DarkModeReducer from "./darkModeReducer";

 
const rootReducer = combineReducers({
    darkMode: DarkModeReducer,
    auth: AuthReducer
})

export default rootReducer;