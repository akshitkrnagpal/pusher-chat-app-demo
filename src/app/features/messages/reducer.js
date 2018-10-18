import { ADD_MESSAGE } from './actionTypes';

const DEFAULT_STATE = {
    messages: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.data)
            };
        default:
            return state;
    }
}
