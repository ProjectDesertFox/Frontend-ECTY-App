import { USEREMAILCODE_CHANGED, USERSTATUS_CHANGED, USER_ERROR, USER_LOADING,ACCESSTOKEN_CHANGED } from '../actionKeys'


const initialState = {
  statusValidEmail: '1',
  error: null,
  loading: false,
  userEmailCode: '',
  access_token:false
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
    case ACCESSTOKEN_CHANGED:
      return { ...state, access_token: action.access_token}
    default:
      return state
  }
}