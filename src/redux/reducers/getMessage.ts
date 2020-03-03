import {
    MESSAGE_ERROR,
    MESSAGE_PENDING,
    MESSAGE_SUCCESS,
    ADD_MESSAGE,
    SET_CURRENT_THREAD
} from "../actions/getMessage";

import {Reducer} from "redux";
import {MessageState} from "./types/MessageState";


const  initialState: MessageState = {
    getMessageIsPending: false,
    allMessage: [],
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
                allMessage: action.payload.messages
            };
        case ADD_MESSAGE:
            return {
                ...state,
                allMessage: [...state.allMessage, action.payload.message]
            };
        case SET_CURRENT_THREAD:
            return {
                ...state,
                threadId: action.payload.threadId
            };
        default:
            return state;
    }
};