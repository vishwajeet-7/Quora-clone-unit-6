import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import  {reducer} from '../Reducers/reducer'


 export const store = createStore(reducer,applyMiddleware(logger))
