import logger from "redux-logger";
import thunk from "redux-thunk";
import answerReducer from "./Frontend/Redux/Answer/answerReducer";
import { reducer } from "../src/Frontend/Redux/reducer";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
const combinedReducer = combineReducers({
  questions: answerReducer,
  post: reducer,
});

const Store = legacy_createStore(
  combinedReducer,
  applyMiddleware(logger, thunk)
);

export default Store;
