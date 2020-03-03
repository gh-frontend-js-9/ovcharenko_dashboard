import {
    SEND_MESSAGE_ERROR,
    SEND_MESSAGE_PENDING,
    SEND_MESSAGE_SUCCESS
} from "../actions/sendMessage";

import {Reducer} from "redux";
import {SendMessageState} from "./types/SendMessageState";


const  initialState: SendMessageState = {
    sendMessageIsPending: false,
    newMessage: []
};

export const sendMessage: Reducer<any, any> = (state= initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_PENDING:
            return {
                ...state,
                sendMessageIsPending: action.payload
            };
        case SEND_MESSAGE_ERROR:
            return {
                ...state,
                sendMessageIsPending: action.payload
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                sendMessageIsPending: false,
                message: action.payload.newMessage
            };
        default:
            return state;
    }
};