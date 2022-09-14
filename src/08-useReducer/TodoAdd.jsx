
import { useRef } from "react"
import { useForm } from "../hooks/useForm"


export const TodoAdd = ({NewTodo, agregar}) => {

     const { onInputChange, description, onResetForm } = useForm({   description: ''   })
    
      
    const Submit = (e) => {
        e.preventDefault()
        if (description.length <= 1 ) return
        const DataNew = {
            id: new Date().getTime()*3,
            description: description ,
            done : false,
        }
        NewTodo && NewTodo(DataNew)
        onResetForm()
    }   
      
  return (
    <>
     <form onSubmit={(e)=> Submit( e ) } className=" mt-2" >
                <input 
                type="text"
                ref={agregar}
                placeholder="Que se va hacer ?"
                name="description"
                value={ description }
                onChange={ onInputChange }
                className="form-control" />
                
                <div className="col-12 d-flex ">
                <button className=" ms-auto btn btn-outline-dark mt-2"> Agregar</button>
                </div>
            </form>
    </>
  )
}
