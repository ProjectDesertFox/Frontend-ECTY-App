import { USERSTATUS_CHANGED, USEREMAILCODE_CHANGED, USER_LOADING, USER_ERROR, ACCESSTOKEN_CHANGED, USERDATA_CHANGED, USERFRIENDLIST_CHANGED, SEARCHFRIEND_CHANGED } from "../actionKeys";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://ecty-backend.herokuapp.com/

let baseUrl = 'http://192.168.1.20:3000'

export function stepOneEmail(UserEmail){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: `https://ecty-backend.herokuapp.com/verification/email`,
      method: 'POST',
      data: { UserEmail }
    })
    .then(({data}) => {
      console.log(data, "data stepone")
      data = data.data
      dispatch(changeUserStatus(data.statusValidEmail))
      dispatch(changeUserCode(data.UniqueNumberVerificationEmail))
    })
    .catch(err => {
      console.log(err)
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function stepTwoVerifyEmail(UserEmail, UniqueNumberVerificationEmail){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/verification/email-verification',
      method: 'PATCH',
      data: {UserEmail, UniqueNumberVerificationEmail}
    })
    .then(({data}) => {
      if(data.message){
        dispatch(changeUserStatus('3'))
      }
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function stepThreeRegisterAccount(username, email, password, navigation){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/register',
      method: 'POST',
      data: {username, email, password}
    })
    .then(({data}) => {
      dispatch(changeUserStatus('done'))
      navigation.navigate('Login')
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function checkUserVerification(email){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: `https://ecty-backend.herokuapp.com/verification/${email}`,
      method: 'GET',
    })
    .then(({data}) => {
      data = data.items
      dispatch(changeUserStatus(data.statusValidEmail))
      dispatch(changeUserCode(data.UniqueNumberVerificationEmail))
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function loginUser(email, password, navigation){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: `https://ecty-backend.herokuapp.com/login`,
      method: 'POST',
      data: {email: email, password: password}
    }) 
    .then(({data}) => {
      dispatch(getUserData(access_token))
      dispatch(getUserFriendList(access_token))
      dispatch(changeAccessToken(data.access_token))
      navigation.navigate('Profile')
      return storeAcessToken(data.access_token)
    })
    .then((data) => {
      return dispatch(getUserData(data))
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

const storeAcessToken = async (access_token) => {
  try {
    await AsyncStorage.setItem('access_token', access_token)
    return access_token
  } catch (e) {
    return e
  }
}

export const getAccessToken = () => {
  return async (dispatch, previousState) =>{  
    try {
      const values = await AsyncStorage.getItem('access_token')
      if(values){
        dispatch(changeAccessToken(values))
      }
    } catch(e) {
      dispatch(userError(e))
    }
  }
}

export function getUserData(access_token){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/users/userCurrent',
      method: 'GET',
      headers: {access_token}
    })
    .then(({data}) => {
      // console.log(data, 'USER DATA')
      dispatch(changeUserData(data))
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function getUserFriendList(access_token){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/friendList/',
      method: 'GET',
      headers: {access_token}
    })
    .then(({data}) => {
      console.log(data, 'SINI DATA FRIENDLISTNYA')
      dispatch(changeUserFriendList(data))
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function stepOneKtp(result, setPage){
  return async (dispatch, previousState) => {
    console.log('masuk1')
    let formData = new FormData()
    let localUri = result.uri
    let filename = localUri.split('/').pop()
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : `image`
    // console.log({ uri: localUri, name: filename, type }, '==')
    formData.append('ktp', { uri: localUri, name: filename, type })
    let access_token = await AsyncStorage.getItem('access_token')
    // let access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0aGFsaWEiLCJpYXQiOjE2NDczMzU4NDZ9.1hNddLHqdabpBfgpnLBTUPTtBcQYFqaNO_Zpy22kC4c'
    dispatch(userLoading(true))
    fetch('https://ecty-backend.herokuapp.com/verification/ktp',{
      method: 'PATCH',
      body: formData,
      headers: {
        access_token,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(async response => {
      const resjson = await response.json()
      console.log(resjson,'response++++++++++');
      if (response.ok) {
        return resjson
      } else {
        throw resjson
      }
    })
    .then(data => {
      console.log(data, 'HASILNYA WOE')
      setPage('Profile')
    })
    .catch(err => {
      console.log(err, 'ERRORRRRRRRR')
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function changeUserData (data) {
  return {type: USERDATA_CHANGED, userData: data}
}

export function changeAccessToken (access_token){
  return {type: ACCESSTOKEN_CHANGED, access_token}
}

export function changeUserStatus(status){
  return { type: USERSTATUS_CHANGED, status: status}
}

export function changeUserCode(code){
  return { type: USEREMAILCODE_CHANGED, code: code}
}

export function userError (err){
  return { type: USER_ERROR, error: err}
}

export function userLoading (status){
  return { type: USER_LOADING, loading: status}
}

export const removeAccesstoken = () => {
  return async (dispatch, previousState) =>{
      try {      
        await AsyncStorage.removeItem('access_token');
        dispatch(changeAccessToken(false))
      } catch(e) {
        dispatch(userError(e))
      }
  }
}

export function changeUserFriendList (data) {
  return {type: USERFRIENDLIST_CHANGED, userFriendList: data}
}

export function searchingFriend (ectyId, access_token) {
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: `https://ecty-backend.herokuapp.com/users/findEctyId/${ectyId}`,
      method: 'GET',
      headers: {access_token}
    })
    .then(({data}) => {
      dispatch(changeSearchFriend(data.search))
    })
    .catch(err => {
      console.log(err, 'ERROR WOE')
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function changeSearchFriend (data){
  return {type: SEARCHFRIEND_CHANGED, searchFriend: data}
}

export function addingFriendProcess (friendId, access_token, setPage){
  console.log(friendId)
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: `https://ecty-backend.herokuapp.com/friendList/${friendId}`,
      method: 'POST',
      headers: {access_token}
    })
    .then(({data}) => {
      console.log(data)
      dispatch(getUserFriendList(access_token))
      setPage('FriendList')
    })
    .catch(err => {
      console.log(err, 'ERROR WOE DISINI')
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}