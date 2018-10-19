// @flow

import { CONNECT_PUSHER, DISCONNECT_PUSHER } from './actionTypes';

type State = {
    pusher: any;
};

const DEFAULT_STATE = {
    pusher: undefined
};

export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case CONNECT_PUSHER:
            return {
                ...state,
                pusher: action.pusher
            };
        case DISCONNECT_PUSHER:
            return {
                ...state,
                pusher: undefined
            }
        default:
            return state;
    }
}
