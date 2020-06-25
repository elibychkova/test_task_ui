import { combineReducers } from 'redux';
import cwReducer from './CompareWizard';

const rootReducer = combineReducers({
  CW: cwReducer
});

export default rootReducer;
