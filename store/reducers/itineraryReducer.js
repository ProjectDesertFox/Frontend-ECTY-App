import { ITINERARYBYONE_CHANGED, ITINERARYRESULT_CHANGED, ITINERARY_CHANGED, ITINERARY_ERROR, ITINERARY_LOADING } from "../actionKeys";

const initialState ={
    itineraries : [],
    itineraryError: false,
    itineraryLoading:false,
    itineraryResult:{},
    itineraryById:{}
}

export default function itineraryReducer (state= initialState,action){
    switch (action.type) {
        case ITINERARY_CHANGED:
            return { ...state, itineraries:action.itineraries}
        case ITINERARY_ERROR:
            return { ...state, itineraryError:action.itineraryError}
        case ITINERARY_LOADING:
            return { ...state, itineraryLoading:action.itineraryLoading}
        case ITINERARYRESULT_CHANGED:
            return {...state, itineraryResult: action.itineraryResult}
        case ITINERARYBYONE_CHANGED:
            return {...state, itineraryById:action.itineraryById}
        default:
            return state
    }
}