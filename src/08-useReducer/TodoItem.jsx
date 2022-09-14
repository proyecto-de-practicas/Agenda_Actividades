import React from 'react'
import { useState } from 'react'

export const TodoItem = ({todo, DeleteTodo, TrueTarea}) => {
 
  const [button, setbutton] = useState(todo.done)
  
  const hecho = () => {
    TrueTarea(todo.id)
    setbutton(!button)
  }

  return (
    <>
     <li  className="list-group-item d-flex justify-content-between ">
         <div className="container">
         <div className="row">
            <div className="col-7 ">
              <span 
              className={`align-self-center ${ (todo.done)? 'text-decoration-line-through' : '' }`}>
                {todo.description}</span>
            </div>
            <div className="col-5 efecto ">
                <button onClick={ () => DeleteTodo(todo.id)} className=" boton btn btn-danger mover "><i className="fa-solid fa-trash"></i></button> 
                <button onClick={ ()=> hecho() } disabled={!button} className=' boton  btn btn-danger mover' ><i className="fa-solid fa-circle-minus"></i></button> 
                <button onClick={ ()=> hecho() } disabled={button} className=' boton  btn btn-success mover' ><i className="fa-solid fa-check"></i></button> 
            </div>
          </div>
         </div>
        
          
    </li>
    </>
  )
}
