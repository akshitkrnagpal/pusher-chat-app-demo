import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

const DEFAULT_STATE = {
    id: undefined
};

export default (state = DEFAULT_STATE, action) => {
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
