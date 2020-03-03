import {
    MESSAGE_ERROR,
    MESSAGE_PENDING,
    MESSAGE_SUCCESS
} from "../actions/getMessage";

import {Reducer} from "redux";
import {MessageState} from "./types/MessageState";
import {REGISTER_ERROR, REGISTER_PENDING, REGISTER_SUCCESS} from "../actions/sign-up";

const  initialState: MessageState = {
    getMessageIsPending: false,
    threadId: ''
};

export const messageInThread: Reducer<any, any> = (state= initialState, action) => {
    switch (action.type) {
        case MESSAGE_PENDING:
            return {
                ...state,
                getMessageIsPending: action.payload
            };
        case MESSAGE_ERROR:
            return {
                ...state,
                getMessageIsPending: action.payload
            };
        case MESSAGE_SUCCESS:
            return {
                ...state,
                getMessageIsPending: false,
                threadId: action.payload.registerUser.registerUser.data
            };
        default:
            return state;
    }
};