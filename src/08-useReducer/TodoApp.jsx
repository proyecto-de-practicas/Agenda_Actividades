

import { useRef } from "react"
import { TodoList, TodoAdd, useTodos } from "./"
import { Head } from "./Head"





export const TodoApp = () => {

     
    const { NewTodo, todosCount , pendinTodosCount , DeleteTodo, TrueTarea, todos, agregar, click} = useTodos( )
   
    let Todoapp = todosCount(todos)
    let Restapp = pendinTodosCount(todos)


    return (
    <>
     <Head Todoapp={Todoapp} Restapp={Restapp}/> 
    <div className="container todo my-4 efecto">
      
       <h6 onClick={click}> <i   className="fa-solid fa-square-plus verde"></i> Agregar tareas</h6> 
     
      <hr />
      
     

      <div className="row">
          <div className="col-12 col-md-5">
           <TodoAdd NewTodo={todo => NewTodo(todo)} agregar={agregar}  /> 
          </div>
          
          <div className="col-12 col-md-7 ">
            <TodoList todo={todos} DeleteTodo={id => DeleteTodo(id)}  TrueTarea={ (id)=>TrueTarea(id) }/>
          </div>
      </div>
    </div>

    <div className="container foot efecto">
      <div className="row">
        <div className="col-12 text-center">
          
             <h6 className="text-dark"> copyright - Jerardo Romero </h6> 
          
        </div>
      </div>
    </div>
    </>
  )
}
