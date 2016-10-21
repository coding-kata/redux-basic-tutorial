// LICENSE : MIT
"use strict";
const assert = require("assert");
import TodoList from "./pages/TodoListPage"
fixture('TodoList')
    .page('http://127.0.0.1:8080/');

// test('should ot have TodoItems', async t => {
//     const todoList = new TodoList();
//     const item = await todoList.getItems();
//     assert(item.length === 0);
// });


test('Add TodoItem', async t => {
    const title = "NEW TODO";
    const todoList = new TodoList(t);
    const prevItems = await todoList.getItems();
    assert(prevItems.length === 0);
    // add item
    await todoList.addTodo({title});
    const currentItems = await todoList.getItems();
    assert(currentItems.length === 1);
    const [firstItem] = currentItems;
    assert.equal(firstItem.title, title);
});

test('Click TodoItem', async t => {
    const title = "NEW TODO";
    const todoList = new TodoList(t);
    const prevItems = await todoList.getItems();
    assert(prevItems.length === 0);
    // add item
    await todoList.addTodo({title});
    const currentItems = await todoList.getItems();
    assert(currentItems.length === 1);
    const [firstItem] = currentItems;
    await firstItem.click();
});