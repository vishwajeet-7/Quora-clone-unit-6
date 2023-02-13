import {
  IS_OPEN,
  TOGGLE_SUCCESS,
  MODAL_CLOSE,
  MODAL_OPEN,
} from "../ActionTypes/ActionType";

let initialState = {
  isOpen: false,
  theme: "light",
  isModal: false,
  posts: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN:
      return {
        ...state,
        isOpen: true,
      };
    case TOGGLE_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case MODAL_OPEN:
      return {
        ...state,
        isModal: action.payload,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isModal: action.payload,
      };
    // case POST_REQUEST:
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    // case POST_SUCCESS:
    //     console.log(action.payload)
    //     return{
    //         ...state,
    //         isLoading:false,
    //         posts: action.payload
    //     }
    // case POST_FAILURE:
    //     return{
    //         ...state,
    //         isLoading:false,
    //         isError:true,
    //     }
    default:
      return state;
  }
};
