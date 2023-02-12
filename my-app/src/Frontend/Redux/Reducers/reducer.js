import { IS_OPEN, TOGGLE_SUCCESS } from "../ActionTypes/ActionType";

let initialState = {
    isOpen: false,
    theme: 'light',
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

        default: return state;
    }
    
}