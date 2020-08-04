import {combineReducers} from 'redux'
import ToDoReducer from './Todo_Reducer'

export default combineReducers({
  todoLists: ToDoReducer,
})
