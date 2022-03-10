import { USERSTATUS_CHANGED, USER_ERROR, USER_LOADING } from '../actionKeys'


const initialState = {
  statusValidEmail: '1',
  error: null,
  loading: false
}

export default function userReducer (state = initialState, action){
  switch (action.type) {
    case USERSTATUS_CHANGED:
      return { ...state, status: action.status}
    case USER_ERROR:
      return { ...state, error: action.error}
    case USER_LOADING:
      return { ...state, loading: action.loading}
    default:
      return state
  }
}