import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import Reducers from './Reducers/index'

export default createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
