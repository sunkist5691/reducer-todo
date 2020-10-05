import React, { useReducer, useState } from 'react';
import { todoReducer } from './Reducer/reducer'
import { initialState } from './Reducer/initialState'
//component
import TodoList from './Component/TodoList'
import TodoForm from './Component/TodoForm'
import './App.css';


function App() {

  const [inputValue, setInputValue] = useState('')
  const [todoList, dispatch] = useReducer(todoReducer, initialState)
  
  // Todo action //
  const addAction = {
    type: 'ADD_TODO',
    payload: inputValue
  }

  const deleteAction = {
    type: 'DELETE_TODO',
  }

  console.log(todoList)
  // Rendering //
  return (
    <div className="App">
      <h1>Todo List</h1>
      {
        todoList.map((eachTodo) => {
          return <TodoList key={eachTodo.id} dispatch={dispatch} eachTodo={eachTodo}/>
        })
      }
      <TodoForm 
        inputValue={inputValue} 
        setInputValue={setInputValue}
        dispatch={dispatch} 
        addAction={addAction} 
        deleteAction={deleteAction} 
      />
    </div>
  );
}

export default App;
