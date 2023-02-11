import { MODAL_CLOSE, MODAL_OPEN, TOGGLE_SUCCESS } from "../ActionTypes/ActionType"

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
