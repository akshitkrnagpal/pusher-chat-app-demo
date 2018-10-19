// @flow

import { ADD_MESSAGE } from './actionTypes';
import type { Message } from './types';

type State = {
    messages: Array<Message>;
}

const DEFAULT_STATE: State = {
    messages: []
};

export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                // $FlowFixMe
                messages: state.messages.concat(action.data)
            };
        default:
            return state;
    }
}
