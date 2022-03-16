import axios from "axios"
import { ITINERARYRESULT_CHANGED, ITINERARY_CHANGED, ITINERARY_ERROR, ITINERARY_LOADING } from "../actionKeys"
import { getAccessToken } from "./userActions"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function actionGetItinerary(itineraries){
    // console.log("masuk")
    return (dispatch, previousState) =>{
        dispatch(actionLoadingItinerary(true))
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
            dispatch(actionLoadingItinerary(true))
        })
    }
}

export function actionCreateItinerary (input) {
    console.log(input, "actionCreate")
    return  async(dispatch, previousState) => {
        dispatch(actionLoadingItinerary(true))
        const values = await AsyncStorage.getItem('access_token')
        axios({
            url:"https://ecty-backend.herokuapp.com/itinerary",
            method: "POST",
            headers: {access_token: values},
            data: input
        })
        .then(data => console.log(data, "====="))
        .catch(error => console.log(error))
        .finally(_ => dispatch(actionLoadingItinerary(false)))
    }

}

export function actionJoinItinerary(id,navigation){
    console.log(navigation, "navigation join")
    console.log(id,"dari join")
    return async(dispatch, previousState) => {
        dispatch(actionLoadingItinerary(true))
        const values = await AsyncStorage.getItem('access_token')
        axios({
            url:`https://ecty-backend.herokuapp.com/groupMember/${id}`,
            method:"POST",
            headers: {access_token: values}
        })
        .then(({data})=>{
            // console.log(data)
            navigation.navigate('BudgetCalculation', {id: id})

        })
        .catch(err => console.log(err))
        .finally(_ => dispatch(actionLoadingItinerary(false)))
    }
}

export function actionResultJoin({id}){
    console.log(id, "diaction result")
    
    console.log(id, "dari result")
    return async (dispatch, previousState) => {
        dispatch(actionLoadingItinerary(true))
        const values = await AsyncStorage.getItem('access_token')
        const data = await axios({
            url:`https://ecty-backend.herokuapp.com/itinerary/${id}`,
            method:'GET',
            headers:{access_token: values}
        })
        .then(({data}) => {
            // console.log(data, "result data")
            // const result = await (data)
            dispatch({
                type: ITINERARYRESULT_CHANGED,
                itineraryResult: data
            })

        })
        .catch(err => console.log(err))
        .finally(_ => dispatch(actionLoadingItinerary(false)))
    }
}

export function actionLoadingItinerary(loadingItinerary){
    return {type:ITINERARY_LOADING, loadingItinerary}
}

export function actionErrorItinerary(errorItinerary){
    return {type:ITINERARY_ERROR, errorItinerary}
}