import React, { Component } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default class App extends Component {
    componentDidMount() {
        const {store} = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const store = this.props.store;
        const state = select(store.getState());
        const {dispatch} = store;
        return (
            <div>
                <AddTodo
                    onAddClick={
                    text =>
                        dispatch(addTodo(text))
                    }/>
                <TodoList
                    todos={state.visibleTodos}
                    onTodoClick={id =>{
                    dispatch(completeTodo(id))
                    }
          }/>
                <Footer
                    filter={state.visibilityFilter}
                    onFilterChange={filter =>{
                    dispatch(setVisibilityFilter(filter))
                    }
          }/>
            </div>
        );
    }
}
