import { combineReducers } from 'redux';

import userReducer from './reducer_user';
import newsReducer from './reducer_news';

export default combineReducers({ userReducer, newsReducer });