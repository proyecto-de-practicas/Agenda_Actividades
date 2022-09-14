import { useEffect, useReducer, useRef } from "react"
import {todoReducer} from '../08-useReducer/todoReducer'
const init =()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
    
    const [ todos , dispatch ] = useReducer( todoReducer , [] , init ) // dispatchTodo ----> varios reduce      |     dispatch ------> un solo reduce | init ------> valor inicial del reduce  

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos)|| [])     
    }, [todos])


    const NewTodo = (value) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: value
        }
        
        dispatch( action )
    }

    const DeleteTodo = ( id ) => {
        dispatch( {
            type: '[TODO] Remove Todo',
            payload: id
        } )
    }
    const TrueTarea = ( id ) => {
        
        dispatch( {
            type: '[TODO] True Todo',
            payload: id
        } )  
    }

    const todosCount = (todo) => {
        return todo.length
    }
    const pendinTodosCount = (todo) => {
        return todo.filter(tod => !tod.done).length
    }

    const agregar = useRef()

    const click = () => {
       agregar.current.select()
    }

  return (
        {
            NewTodo,
            DeleteTodo,
            TrueTarea,
            todos, 
            todosCount , 
            pendinTodosCount,
            agregar,
            click
        }
  )
}
