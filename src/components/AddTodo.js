import React from 'react'

import './AddTodo.css'
const AddTodo = ({ onAddTodo }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onAddTodo(e.target.value)
    }
  }

  return (
    <>
      <div id="myDIV" className="header">
        <h2 className="myh2">My To Do List</h2>
        <input
          type='text'
          onKeyPress={handleKeyPress}
          placeholder='Add new todo...'
        />
        
      </div>
    </>
  )
}



export default AddTodo
