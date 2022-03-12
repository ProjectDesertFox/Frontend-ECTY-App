import axios from "axios"

export function getItinerary(){
    return (dispatch,previousStater)=>{
        axios({
            url:'https://ecty-backend.herokuapp.com/',
            method:'GET',
            headers:{
                access_token: 
            }
        })
    }
}