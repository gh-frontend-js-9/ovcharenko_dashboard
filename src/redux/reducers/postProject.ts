import {
    PROJECT_ERROR,
    PROJECT_PENDING,
    PROJECT_SUCCESS
} from "../actions/postProject";

import {postProjectState} from "./types/PostProjectState";
import {Reducer} from "redux";


const initialState: postProjectState = {
    isPending: false
};

export const postProjectReducer: Reducer<postProjectState> = (state= initialState, action) => {
    switch (action.type) {
        case PROJECT_SUCCESS:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        case PROJECT_PENDING:
            return {
                ...state,
                isPending: action.payload
            };
        case PROJECT_ERROR:
            return {
                ...state,
                isPending: action.payload.isPending,
            };
        default:
            return state;
    }
};