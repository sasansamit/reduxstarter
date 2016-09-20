/**
 * Created by ssasan on 9/20/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import {TodoAppContainer} from './components/TodoApp';

import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        todos: [
            {id: 1, text: 'React', status: 'active', editing: false},
            {id: 2, text: 'Redux', status: 'active', editing: false},
            {id: 3, text: 'Immutable', status: 'active', editing: false},
        ],
        filter: 'all'
    },
})

require('../node_modules/todomvc-app-css/index.css');
const filter = 'all';
ReactDOM.render(
    <Provider store={store}>
        <TodoAppContainer />
    </Provider>,
    document.getElementById('app')
)