export const todoReducer = (state, action) => {

   switch(action.type){
     case "ADD_TODO":
         return [ ...state, { item: action.payload, completed: false, id: Date.now() }]
 
     case "COMPLETE_TODO":
         return state.map((eachTask) => {
           if(eachTask.id === action.payload){
             return {
               ...eachTask,
               completed: !eachTask.completed
             }
           }
           return eachTask
         })
 
     case "DELETE_TODO":
         return state.filter((eachTask) => eachTask.completed === false)
 
     default:
         return state
   }
 
 }