import {
    THREAD_ERROR,
    THREAD_PENDING,
    THREAD_SUCCESS
} from "../actions/postThread";

import {Reducer} from "redux";
import {NewThreadState} from "./types/NewThreadState";


const initialState: NewThreadState = {
    postThreadIsPending: false,
    thread: []
};

export const postThread: Reducer<any, any> = (state= initialState, action) => {
    switch (action.type) {
        case THREAD_PENDING:
            return {
                ...state,
                postThreadIsPending: action.payload
            };
        case THREAD_ERROR:
            return {
                ...state,
                postThreadIsPending: action.payload
            };
        case THREAD_SUCCESS:
            return {
                ...state,
                postThreadIsPending: false,
                thread: action.payload.newThread
            };
        default:
            return state;
    }
};