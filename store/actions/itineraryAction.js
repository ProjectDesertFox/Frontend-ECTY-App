import axios from "axios"
import { ITINERARY_CHANGED } from "../actionKeys"
import { getAccessToken } from "./userActions"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function actionGetItinerary(itineraries){
    // console.log("masuk")
    return (dispatch, previousState) =>{
  
        axios ({
            url: `https://ecty-backend.herokuapp.com/itinerary`,
            method: "GET"
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

export function actionCreateItinerary (input) {
     console.log(input, "actionCreate")
    return  async(dispatch, previousState) => {
        const values = await AsyncStorage.getItem('access_token')
        axios({
            url:"https://ecty-backend.herokuapp.com/itinerary",
            method: "POST",
            headers: {access_token: values},
            data: input
        })
        .then(data => console.log(data, "====="))
        .catch(error => console.log(error))
    }

}

