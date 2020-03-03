import { combineReducers } from "redux";
import { signUp } from "./sign-up";
import {loginReducer} from "./login";
import {reset} from "./reset";
import {postProjectReducer} from "./postProject";
import {messageInThread} from "./getMessage";
import {sendMessage} from "./sendMessage";
import {allUsers} from "./getAllUser";

const rootReducer = combineReducers({
    signUp,
    reset,
    loginReducer,
    postProjectReducer,
    messageInThread,
    sendMessage,
    allUsers
});

export default rootReducer;