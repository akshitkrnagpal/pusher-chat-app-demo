import { CONNECT_PUSHER, DISCONNECT_PUSHER } from './actionTypes';

const DEFAULT_STATE = {
    pusher: undefined
};

export default (state = DEFAULT_STATE, action) => {
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
