import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./login";

const rootReducer = combineReducers({
    signUp,
    loginReducer,
});

export default rootReducer;