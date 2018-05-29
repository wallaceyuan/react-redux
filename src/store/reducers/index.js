import { combineReducers } from 'redux'
import counter from './counter'
import todos from './list'

export default combineReducers({
    counter,
    todos
})