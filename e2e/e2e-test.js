// LICENSE : MIT
"use strict";
const assert = require("assert");
import TodoPage from "./pages/index"
fixture('TodoList')
    .page('http://127.0.0.1:8080/');

test('Add TodoItem', async t => {
    const title = "NEW TODO";
    const todoPage = new TodoPage(t);
    // add item
    await todoPage.addTodo({title});
    const currentItems = await todoPage.getItems();
    assert(currentItems.length === 1);
    const [firstItem] = currentItems;
    assert.equal(firstItem.title, title);
});

test('Click TodoItem & filter completed', async t => {
    const title = "NEW TODO";
    const todoPage = new TodoPage(t);
    const prevItems = await todoPage.getItems();
    assert(prevItems.length === 0);
    // add item
    await todoPage.addTodo({title});
    const currentItems = await todoPage.getItems();
    assert.equal(currentItems.length, 1);
    // done item
    const [firstItem] = currentItems;
    await firstItem.click();
    // filter active items
    await todoPage.footer.clickActive();
    const newItems = await todoPage.getItems();
    const completedItems = newItems.filter(item => {
        return item.visible;
    });
    assert.equal(completedItems.length, 0);
});