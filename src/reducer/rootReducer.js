import { combineReducers } from 'redux';
import reducer from './reducer';
import filterReducer from './filterReducer';
export default combineReducers({
	reducer,
	filterReducer,
});
