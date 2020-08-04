import {ADD_TODO_LIST, DEL_TODO_LIST, SET_LIST_COMPLETED} from '../Action_Types'

const initState = []

export default (preState = initState, action) => {
  const {type, info} = action
  let nextState
  switch (type) {
    case ADD_TODO_LIST:
      nextState = [...preState, info]
      break
    case DEL_TODO_LIST:
      nextState = preState.filter((v, index) => index !== info.index)
      break
    case SET_LIST_COMPLETED:
      nextState = preState.map((v, index) => {
        if (index === info.index) {
          v.completed = true
        }
        return v
      })
      break
    default:
      nextState = preState
      break
  }
  return nextState
}
