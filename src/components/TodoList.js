import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="TodoList">
                {this.props.todos.map((todo, index) =>
                    <TodoItem {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(todo.id)}/>
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};