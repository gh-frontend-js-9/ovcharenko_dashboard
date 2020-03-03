import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./login";
import {reset} from "./reset";
import {postProjectReducer} from "./postProject";
import {messageInThread} from "./getMessage";

const rootReducer = combineReducers({
    signUp,
    reset,
    loginReducer,
    postProjectReducer,
    messageInThread,
});

export default rootReducer;