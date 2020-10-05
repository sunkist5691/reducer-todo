import React from 'react'

function TodoForm({ 
   inputValue, 
   setInputValue, 
   dispatch, 
   addAction, 
   deleteAction 
}) 

{
   
   const handlerSubmit = (e) => {

      e.preventDefault()
      setInputValue('')

   }

   const handlerChange = (e) => {

      setInputValue(e.target.value)

   }

   // Rendering //
   return (
      <div className='TodoForm'>
         <form onSubmit={handlerSubmit}>
            <label htmlFor='addTodo'>
               <input 
                  id='addTodo'
                  type="text"
                  name='addTodo'
                  placeholder='Add Todo'
                  onChange={handlerChange}
                  value={inputValue}
                  />
               <button onClick={() => dispatch(addAction)}>Add Todo</button>
               <button onClick={() => dispatch(deleteAction)}>Clear Complete Todo</button>
            </label>
         </form>
      </div>
   )
}

export default TodoForm
