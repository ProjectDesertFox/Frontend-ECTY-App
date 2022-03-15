import { USERSTATUS_CHANGED, USEREMAILCODE_CHANGED, USER_LOADING, USER_ERROR, ACCESSTOKEN_CHANGED } from "../actionKeys";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://ecty-backend.herokuapp.com/

export function stepOneEmail(UserEmail){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/verification/email',
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
      dispatch(changeAccessToken(true))
      navigation.navigate('Profile')
      return storeAcessToken(data.access_token)
    })
    // .then(() => {
    //   console.log('berhasil')

    //   return getAccessToken()
    // })
    // .then(({response}) => {
    //   // console.log("=========")
    // })
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
  } catch (e) {
    console.log(e, 'FAIL STORING DATA')
    return e
  }
}
export const getAccessToken = () => {
  return async (dispatch, previousState) =>{  
    try {
      const values = await AsyncStorage.getItem('access_token')
      if(values){
        dispatch(changeAccessToken(true))
        dispatch(getUserData())
        return values
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
      url: 'https://ecty-backend.herokuapp.com/verification/email',
      method: 'POST',
      data: { UserEmail }
    })
    .then(({data}) => {
      data = data.data
      dispatch(changeUserStatus(data.statusValidEmail))
      dispatch(changeUserCode(data.UniqueNumberVerificationEmail))
    })
    .catch(err => {
      console.log(err, 'ERROR STEP ONE')
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function changeAccessToken (access_token){
  console.log('msuk change')
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
  // console.log('masuk remover')
  return async (dispatch, previousState) =>{
      try {      
        console.log("masuk try")
        await AsyncStorage.removeItem('access_token');
        dispatch(changeAccessToken(false))
      } catch(e) {
        console.log(e, "eror remover")
        dispatch(userError(e))
        // return {}
      }
  }
}

