// LICENSE : MIT
"use strict";
import React, {Component,PropTypes} from "react";
export default class AddTodo extends Component {
    handleClick(event) {
        event.preventDefault();
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render() {
        return <div>
            <input type="text" ref="input"/>
            <button onClick={this.handleClick.bind(this)}>
                Add
            </button>
        </div>
    }
}
AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};