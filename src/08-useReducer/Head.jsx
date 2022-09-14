import React from 'react'

export const Head = ({Todoapp, Restapp }) => {
  return (
    <>
    <div className="container header efecto">
       <div className="row">
        <div className="col-6 efecto">
        <h3 className="text-center color"><i className="fa-solid fa-bookmark verde"></i> Tareas : { Todoapp }</h3>
        </div>
       
        <div className="col-6 efecto">
        <h3 className="text-center color"><i className="fa-solid fa-calendar-xmark rojo" ></i> <small>  Tareas Pendientes : { Restapp }</small> </h3>
      
        </div>
        
         </div>
    </div>
    </>
  )
}
