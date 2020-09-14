import {ADD_MESSAGE , GET_MESSAGES ,DELETE_MESSAGE} from '../actions/types'

export const getMessages = () => {
    return{
        type:GET_MESSAGES
    };

}


export const deleteMessage = (id) => {
    return{
        type:DELETE_MESSAGE , 
        payload : id
    };

}

export const addMessage = (message) =>{
    return{
        type:ADD_MESSAGE , 
        payload: message    
    }
}