import { useRef } from "react"


export const FocusScreen = () => {

    const inputRef = useRef()
    const click = () => {
        inputRef.current.select()
       /*   const n = inputRef.current.value
        console.log(n) */
         
    }

    return (
   <>
   <h1>Focus Screen</h1>

   <hr />

   <input 
   ref={inputRef}
   type="text" 
   placeholder="Ingrese su nombre "
   className="form-control"/>

   <button className="btn btn-primary mt-2" onClick={ click } > Selec </button>

   </>
  )
}
