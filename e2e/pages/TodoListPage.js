// LICENSE : MIT
"use strict";
import TodoItemPage from "./TodoItemPage";
import AddTodoPage from "./AddTodoPage";
import {Selector} from 'testcafe';
const querySelector = Selector(selector => document.querySelector(selector));
const querySelectorAll = Selector(selector => document.querySelectorAll(selector));

export default class TodoListPage {
    static get selector() {
        return '.TodoList';
    }

    constructor(t) {
        this.t = t;
        this._list = querySelector(this.constructor.selector);
    }

    async addTodo({title}) {
        const addTodoPage = new AddTodoPage(this.t);
        await addTodoPage.addTodo({title});
    }

    async getItems() {
        const items = await querySelectorAll(TodoItemPage.selector);
        if (!items) {
            return [];
        }
        return [].concat(items).map((item) => {
            return new TodoItemPage({t: this.t, item});
        });
    }
}