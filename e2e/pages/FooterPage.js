// LICENSE : MIT
"use strict";
import {Selector} from 'testcafe';
const querySelector = Selector(selector => document.querySelector(selector));

export default class FooterPage {
    constructor(t) {
        this.t = t;
    }

    async clickCompleted() {
        return this.t.click(querySelector('.Footer-completed'));
    }
    async clickActive() {
        return this.t.click(querySelector('.Footer-active'));
    }
}