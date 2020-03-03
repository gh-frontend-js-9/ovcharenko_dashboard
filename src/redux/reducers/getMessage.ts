import {
    MESSAGE_ERROR,
    MESSAGE_PENDING,
    MESSAGE_SUCCESS
} from "../actions/getMessage";

import {Reducer} from "redux";
import {MessageState} from "./types/MessageState";


const  initialState: MessageState = {
    getMessageIsPending: false,
    allMessage: []
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
        default:
            return state;
    }
};