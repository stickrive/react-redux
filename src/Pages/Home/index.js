import React, {useEffect} from 'react'
import {connect} from 'react-redux'

const Home = (props) => {
  useEffect(() => {
    console.log('===props===', props)
  }, [])
  return (
    <div>
      <h2>Home</h2>有{props.List.todoLists.length}个计划需要去做
    </div>
  )
}

export default connect(
  (state) => ({
    List: state,
  }),
  {}
)(Home)
