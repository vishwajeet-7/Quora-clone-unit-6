
import { MODAL_CLOSE, MODAL_OPEN, TOGGLE_SUCCESS } from "../ActionTypes/ActionType"
import axios from 'axios'

export const openModal = (payload)=>{
    return({
        type: MODAL_OPEN,
        payload,
    })
}
export const closeModal = (payload)=>{
    return({
        type: MODAL_CLOSE,
        payload,
    })
}

export const handleTheme = payload => ({
    type: TOGGLE_SUCCESS,
    payload,

})
// export const postSuccess = (payload)=>{
//     return ({
//         type: POST_SUCCESS,
//         payload,
//     })
// }

// export const postRequest =()=>{
//     return({
//         type: POST_REQUEST
//     })
// }

// export const postError= ()=>{
//     return({
//         type: POST_FAILURE,
//     })
// }
