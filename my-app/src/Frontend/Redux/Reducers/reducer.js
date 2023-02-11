import { IS_OPEN, TOGGLE_SUCCESS, MODAL_CLOSE,MODAL_OPEN } from "../ActionTypes/ActionType";

let initialState = {
    isOpen: false,
    theme: 'light',
    isModal: false,
}


export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case IS_OPEN:
            return ({
                ...state,
                isOpen: true,
            })
        case TOGGLE_SUCCESS:
            return({
                ...state,
                theme: action.payload,
            })
        case MODAL_OPEN:
            return ({
                ...state,
                isModal: action.payload
            })
        case MODAL_CLOSE:
            return ({   
                ...state,
                isModal: action.payload
            })
        default: return state;
    }
    
}