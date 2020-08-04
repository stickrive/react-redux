import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from '../Pages/Main'

import Home from '../Pages/Home/index'
import TodoList from '../Pages/Todo/index'

const App = () => {
  return (
    <Router>
      <Main></Main>
      <Switch>
        <Route path="/todo">
          <TodoList />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
