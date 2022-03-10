import { combineReducers } from "redux";
import userReducer from './userReducer'

let reducer = combineReducers({
  user: userReducer
})

export default reducer