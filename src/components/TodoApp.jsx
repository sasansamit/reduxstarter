import React from 'react';

import TodoList from './TodoList'
import {connect} from 'react-redux'

export class TodoApp extends React.Component {
    getItems() {
        console.log(this.props)
        return this.props.todos || [];
    }

    render() {
        return <div>
            <section className="todoapp">
                <TodoList todos={this.getItems()} filter={this.props.filter}/>
            </section>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        todos: state.get('todos'),
        filter: state.get('filter')
    };
}

export const TodoAppContainer = connect(mapStateToProps)(TodoApp);