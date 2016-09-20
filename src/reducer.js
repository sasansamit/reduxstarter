/**
 * Created by ssasan on 9/20/16.
 */
import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState)
}

export default function (state = Map(), action) {
    console.log('Before State=' + state + ' Action=' + JSON.stringify(action));
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
    }
    console.log('After State=' + state + ' Action=' + JSON.stringify(action));
    return state;
}