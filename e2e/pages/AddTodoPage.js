// LICENSE : MIT
"use strict";
import {Selector} from 'testcafe';
const querySelector = Selector(selector => document.querySelector(selector));
export default class AddTodoPage {

    constructor(t) {
        this.t = t;
    }

    async addTodo({title}) {
        const input = await this.getInput();
        await this.t.typeText(input, title);
        const button = await this.getButton();
        await this.t.click(button);
    }

    async getInput() {
        return await querySelector('.AddTodo-input')
    }

    async getButton() {
        return await querySelector('.AddTodo-button')
    }
}