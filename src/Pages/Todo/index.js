import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {
  addTodoList,
  delTodoList,
  setListCompleted,
} from '../../Redux/Actions/Todo_Actions'

import TestHome from '../Home/index'

const TodoList = (props) => {
  const inputEle = useRef(null)
  const TodoList = props.lists.todoLists
  useEffect(() => {
    console.log('componentDidMount')
    // 当useEffect的第二个参数为[],
    // 相当于 componentDidMount
    return () => {
      console.log('componentWillUnmount')
      // useEffect的 第1个参数有 返回函数时，
      // 第2个参数为 [] 时
      // 相当于 componentWillUnmount
    }
  }, [])

  useEffect(() => {
    inputEle.current.value = null
  }, [props.lists.todoLists])

  const addItem = () => {
    let item = {
      text: inputEle.current.value,
      completed: false,
      createTime: new Date().getTime(),
    }
    props.addTodoList(item)
  }

  const delItem = (e, index) => {
    e.stopPropagation()
    props.delTodoList({index})
  }

  const setItemCompleted = (index) => {
    props.setListCompleted({index})
  }

  return (
    <div>
      <TestHome></TestHome>
      <h5>我将做这些事情</h5>
      <hr />
      <div>
        <input
          placeholder="请填写计划"
          width="200"
          type="text"
          ref={inputEle}
        />{' '}
        <button onClick={addItem}>添加计划</button>
      </div>
      <ul>
        {TodoList && TodoList.length
          ? TodoList.map((v, index) => {
              return (
                <li
                  key={v.createTime}
                  onClick={() => setItemCompleted(index)}
                  style={{
                    cursor: 'pointer',
                    textDecoration: v.completed ? 'line-through' : 'none',
                    marginTop: '20px',
                    width: '500px',
                    backgroundColor: '#eee',
                  }}>
                  {v.text}
                  <button
                    onClick={(e) => delItem(e, index)}
                    style={{
                      marginLeft: '50px',
                      cursor: 'pointer',
                      float: 'right',
                    }}>
                    删除计划
                  </button>
                </li>
              )
            })
          : '暂无计划'}
      </ul>
    </div>
  )
}

export default connect((state) => ({lists: state}), {
  addTodoList,
  delTodoList,
  setListCompleted,
})(TodoList)
