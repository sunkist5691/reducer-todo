import React from 'react'
import './TodoList.css'

function TodoList({ dispatch, eachTodo }) {

   const toggleAction = {
      type: 'COMPLETE_TODO',
      payload: eachTodo.id
   }

   // Rendering //
   return (
      <div 
         className={`todoList${eachTodo.completed ? ' completed' : ''}`}
         onClick={ () => dispatch(toggleAction) }
      >
         <p>{eachTodo.item}</p>
      </div>
   )
}

export default TodoList
