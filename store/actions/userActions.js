import { USERSTATUS_CHANGED, USER_LOADING, USER_ERROR } from "../actionKeys";
import axios from 'axios'

// https://ecty-backend.herokuapp.com/

export function stepOneEmail(UserEmail){
  return (dispatch, previousState) => {
    console.log(UserEmail, '<<<<<<<<<')
    dispatch(userLoading(true))
    axios({
      url: 'https://ecty-backend.herokuapp.com/verification/email',
      method: 'POST',
      data: { UserEmail }
    })
    .then(({data}) => {
      console.log(data, 'RESPON DARI BACKEND')
      
    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function stepTwoVerifyEmail(){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: '',
      method: 'POST'
    })
    .then((data) => {
      console.log(data)

    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function stepThreeRegisterAccount(){
  return (dispatch, previousState) => {
    dispatch(userLoading(true))
    axios({
      url: '',
      method: 'POST'
    })
    .then((data) => {
      console.log(data)

    })
    .catch(err => {
      dispatch(userError(err))
    })
    .finally(() => {
      dispatch(userLoading(false))
    })
  }
}

export function userError (err){
  // Swal.fire(err.response.data.error)
  return { type: USER_ERROR, error: err}
}

export function userLoading (status){
  return { type: USER_LOADING, loading: status}
}