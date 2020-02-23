import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./login";
import {reset} from "./reset";

const rootReducer = combineReducers({
    signUp,
    reset,
    loginReducer,
});

export default rootReducer;