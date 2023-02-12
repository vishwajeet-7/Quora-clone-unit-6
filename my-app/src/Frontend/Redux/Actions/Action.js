import { IS_OPEN, TOGGLE_SUCCESS } from "../ActionTypes/ActionType"

export const handleModal = (dispatch,payload)=>{
    dispatch({
        type: IS_OPEN,
        payload: !payload
    })
}

export const handleTheme = payload => ({
    type: TOGGLE_SUCCESS,
    payload,
})