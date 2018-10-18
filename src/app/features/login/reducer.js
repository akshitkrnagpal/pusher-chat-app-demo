import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const DEFAULT_STATE = {
    username: undefined
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                username: action.username
            };
        case LOGOUT_USER:
            return {
                ...state,
                username: undefined
            }
        default:
            return state;
    }
}
