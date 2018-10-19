// @flow

import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

type State = {
    id: string | typeof undefined;
};

const DEFAULT_STATE: State = {
    id: undefined
};

export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                id: action.id
            };
        case LOGOUT_USER:
            return {
                ...state,
                id: undefined
            }
        default:
            return state;
    }
}
