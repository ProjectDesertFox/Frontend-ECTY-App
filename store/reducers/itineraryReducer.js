import { ITINERARY_CHANGED, ITINERARY_ERROR, ITINERARY_LOADING } from "../actionKeys";

const initialState ={
    itineraries : [],
    itineraryError: false,
    itneraryLoading:false
}

export default function itineraryReducer (state= initialState,action){
    switch (action.type) {
        case ITINERARY_CHANGED:
            return { ...state, itineraries:action.itineraries}
        case ITINERARY_ERROR:
            return { ...state, itineraryError:action.itineraryError}
        case ITINERARY_LOADING:
            return { ...state, itineraryLoading:action.itineraryLoading}
        default:
            return state
    }
}