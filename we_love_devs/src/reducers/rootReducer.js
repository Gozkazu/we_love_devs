import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import list from '../redux_modules/list'

export default combineReducers({
 simpleReducer,
 list
});