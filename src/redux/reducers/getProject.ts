import {
     GET_PROJECT_ERROR,
    GET_PROJECT_PENDING,
    GET_PROJECT_SUCCESS
} from "../actions/getProject";

import {getProjectState} from "./types/GetProjectState";
import {Reducer} from "redux";


const initialState: getProjectState = {
    isPending: false
};

export const getProjectReducer: Reducer<getProjectState> = (state= initialState, action) => {
    switch (action.type) {
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        case GET_PROJECT_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case GET_PROJECT_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        default:
            return state;
    }
};