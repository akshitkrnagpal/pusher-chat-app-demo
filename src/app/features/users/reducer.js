// @flow

import { ADD_USER, REMOVE_USER } from './actionTypes';
import type { User } from './types';

type State = {
    users: Array<User>;
};

const DEFAULT_STATE: State = {
    users: []
};

export default (state: State = DEFAULT_STATE, action: Object) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                // $FlowFixMe
                users: state.users.concat(action.users)
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter( (user) => (user.id !== action.user.id))
            }
        default:
            return state;
    }
}
