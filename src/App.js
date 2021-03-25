import React from 'react'
import "./index.css"
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import useTodos from './useTodos'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'


function App() {
  const { list, createTodo, toggleComplete } = useTodos()
  const [pendingFilter, setpendingFilter] = React.useState([])
  const [completedFilter, setcompletedFilter] = React.useState([])

  const pending = list.filter(ts => ts.completed == false)
  const completed = list.filter(ts => ts.completed == true)

  return (
    <>
     
        <Wrapper>

          <TodosWrapper>

            <AddTodo onAddTodo={createTodo} />

            <TodoList items={list} toggleComplete={toggleComplete} />

          </TodosWrapper>

        </Wrapper>
      
      <div className="todoc">
        <h3 className="header1">Filter</h3>
        <ul>
          <h4 className="com">Completed</h4>
          {completed.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
        <ul>
          <h4 className="pen">Active</h4>
          {pending.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      </div>
    </>
 
 )
}

const Wrapper = styled.div`
  
`

const TodosWrapper = styled.div`
 
`

export default App
