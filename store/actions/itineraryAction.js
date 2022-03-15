import axios from "axios"
import { ITINERARY_CHANGED } from "../actionKeys"
import { getAccessToken } from "./userActions"

export function actionGetItinerary(itineraries){
    console.log("masuk")
    return (dispatch, previousState) =>{
  
        axios ({
            url: `https://ecty-backend.herokuapp.com/itinerary`,
            method: "GET",
            headers:{
                access_token: getAccessToken()

            }
        })
        .then(({data}) =>{
            // console.log(data)
            // console.log(loading, "ini loading")
            // dispatch(actionFetchNews(data))
            dispatch({
                type:ITINERARY_CHANGED,
                itineraries: data
            })

        })
        .catch(err => {
            console.log(err)
            // dispatch({
            //     type: ERROR_CHANGED,
            //     error: err
            // })
            // Swal.fire(err.response.data.message)
        })
        .finally(_ => {
            console.log('a')
            // dispatch(actionLoadingNews(false))
        })
    }
}

