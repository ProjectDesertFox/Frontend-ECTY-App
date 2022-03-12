import { combineReducers } from "redux";
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'

let reducer = combineReducers({
  user: userReducer,
  itinerary:itineraryReducer
})

export default reducer