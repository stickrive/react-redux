import {ADD_TODO_LIST, DEL_TODO_LIST, SET_LIST_COMPLETED} from '../Action_Types'

export const addTodoList = (info) => {
  return {
    type: ADD_TODO_LIST,
    info,
  }
}

export const delTodoList = (info) => {
  return {
    type: DEL_TODO_LIST,
    info,
  }
}

export const setListCompleted = (info) => {
  return {
    type: SET_LIST_COMPLETED,
    info,
  }
}
