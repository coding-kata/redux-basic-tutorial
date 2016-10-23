// LICENSE : MIT
"use strict";
export default class TodoItemPage {
    static get selector() {
        return '.TodoItem';
    }

    constructor({t, item}) {
        this.t = t;
        this.item = item;
    }

    get visible() {
        return this.item.visible;
    }

    get title() {
        return this.item.textContent;
    }

    async click() {
        await this.t.click(this.item);
    }
}