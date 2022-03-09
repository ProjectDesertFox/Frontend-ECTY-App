import { USERSTATUS_CHANGED, USER_LOADING, USER_ERROR } from "../actionKeys";
import axios from 'axios'

export function getUserStatus () {
  return (dispatch, previousState) => {
    dispatch (userLoading(true))
    
  }
}

export function userError (err){
  // Swal.fire(err.response.data.error)
  return { type: USER_ERROR, error: err}
}

export function userLoading (status){
  return { type: USER_LOADING, loading: status}
}