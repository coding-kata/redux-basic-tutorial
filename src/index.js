// LICENSE : MIT
"use strict";
import { createStore } from "redux";
import React from "react";
import {render} from "react-dom";
import App from "./container/App";
import todoApp from "./reducers";
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'
let store = createStore(todoApp);
render(<App store={store}/>, document.getElementById("js-main"));