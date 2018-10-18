import { ADD_USER, REMOVE_USER } from './actionTypes';

const DEFAULT_STATE = {
    users: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
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
