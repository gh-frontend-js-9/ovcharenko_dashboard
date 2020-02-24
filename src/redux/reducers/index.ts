import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./login";
import {reset} from "./reset";
import {postProjectReducer} from "./postProject";

const rootReducer = combineReducers({
    signUp,
    reset,
    loginReducer,
    postProjectReducer
});

export default rootReducer;