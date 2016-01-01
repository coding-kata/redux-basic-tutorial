// LICENSE : MIT
"use strict";
import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    COMPLETE_TODO,
    ADD_TODO
} from "./actions";

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

import { combineReducers } from 'redux'

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case COMPLETE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: true
            });
        default:
            return state
    }
}
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case COMPLETE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}
function todoApp(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}
/* ===
const todoApp = combineReducers({
    visibilityFilter,
    todos
});
 */
export default todoApp;