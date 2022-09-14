import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todo, DeleteTodo, TrueTarea}) => {
    
  return (
    <>
     <ul className="list-group mt-2">

            {
                todo.map( todo => (
                   <TodoItem key={todo.id} todo={todo} DeleteTodo={id => DeleteTodo(id)} TrueTarea={ (id)=>TrueTarea(id)}/>
                )  )
            }
    </ul>
    </>
  )
}
