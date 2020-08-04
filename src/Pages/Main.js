import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo">TodoList</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
