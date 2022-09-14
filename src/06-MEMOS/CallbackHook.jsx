import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    const [counter, setcounter] = useState(10)

     const increment = useCallback( //apunta al espacio de memoria 
      (c) => {
        setcounter( (value) => value + c )
      },
      [],
    )
    
/* 
    const increment = () => {
        setcounter( counter + 1 )
    } */
    return (
    <>
    <h1>UseCallback Hook: { counter }</h1>
    <ShowIncrement increment={ increment } />
    </>
  )
}
