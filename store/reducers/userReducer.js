import { USEREMAILCODE_CHANGED, USERSTATUS_CHANGED, USER_ERROR, USER_LOADING } from '../actionKeys'


const initialState = {
  statusValidEmail: 'done',
  error: null,
  loading: false,
  userEmailCode: ''
}

export default function userReducer (state = initialState, action){
  switch (action.type) {
    case USERSTATUS_CHANGED:
      return { ...state, statusValidEmail: action.status}
    case USEREMAILCODE_CHANGED:
      return { ...state, userEmailCode: action.code}
    case USER_ERROR:
      return { ...state, error: action.error}
    case USER_LOADING:
      return { ...state, loading: action.loading}
    default:
      return state
  }
}