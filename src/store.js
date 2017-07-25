// Import libraries
import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

// Import reducers
import user from './ducks/user'


export default createStore(
   combineReducers({user}), 
   {}, 
   applyMiddleware(promiseMiddleware())
)