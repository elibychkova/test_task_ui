import { combineReducers } from 'redux';
import manufacturers from './manufacturers.reducer';

const cwReducer = combineReducers({
    manufacturers
});

export default cwReducer;
