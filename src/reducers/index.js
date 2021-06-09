import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import InfoReducer from './infoReducer';
import InfoFetchReducer from './infoFetchReducer';




export default combineReducers({
  auth:AuthReducer,
  info:InfoReducer,
infoForm:InfoFetchReducer
})
