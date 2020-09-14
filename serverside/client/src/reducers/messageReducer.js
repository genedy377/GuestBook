import {v1 as uuid} from 'uuid'
import {ADD_MESSAGE , GET_MESSAGES ,DELETE_MESSAGE} from '../actions/types'

const initialState = {
    messages:[
        { id: uuid() , content:'First Message'},
        { id: uuid() , content:'Second Message'},
        { id: uuid() , content:'Third Message'},
        { id: uuid() , content:'Fourth Message'},
    ]
}

export default function(state = initialState , action)
{
    switch(action.type)
    {
       case GET_MESSAGES :
           return {
               ...state
           };
        
        case DELETE_MESSAGE : 
           return{
               ...state,
               messages:state.messages.filter(message => message.id !== action.payload )
           };
        
        case ADD_MESSAGE :
            return{
                ...state,
                messages:[action.payload , ...state.items]
            }   
        default :
           return state ; 
    }
}