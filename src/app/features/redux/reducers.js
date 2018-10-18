import { combineReducers } from 'redux';

import { reducer as loginReducer } from '../login';

export default combineReducers({
    login: loginReducer,
});
