import { USEREMAILCODE_CHANGED, USERSTATUS_CHANGED, USER_ERROR, USER_LOADING,ACCESSTOKEN_CHANGED, USERDATA_CHANGED, STATUSVALIDKTP_CHANGED, USERFRIENDLIST_CHANGED, SEARCHFRIEND_CHANGED } from '../actionKeys'


const initialState = {
  statusValidEmail: '1',
  error: null,
  loading: false,
  userEmailCode: '',
  access_token:false,
  userData: null,
  statusValidKTP: '',
  userFriendList: [],
  searchFriend: null
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
    case USERDATA_CHANGED:
      return { ...state, userData: action.userData}
    case STATUSVALIDKTP_CHANGED:
      return { ...state, statusValidKTP: action.statusValidKTP}
    case USERFRIENDLIST_CHANGED:
      return { ...state, userFriendList: action.userFriendList}
    case SEARCHFRIEND_CHANGED:
      return { ...state, searchFriend: action.searchFriend}
    default:
      return state
  }
}