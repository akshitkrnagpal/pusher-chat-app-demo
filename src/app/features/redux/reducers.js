import { combineReducers } from 'redux';

import { reducer as loginReducer } from '../login';
import { reducer as usersReducer } from '../users';
import { reducer as messagesReducer } from '../messages';
import { reducer as pusherReducer } from '../pusher';

export default combineReducers({
    login: loginReducer,
    users: usersReducer,
    messages: messagesReducer,
    pusher: pusherReducer,
});
