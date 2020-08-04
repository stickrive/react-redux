import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router/Router'
import store from './Redux/Store'
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
