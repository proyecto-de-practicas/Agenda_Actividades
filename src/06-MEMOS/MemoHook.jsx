import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'


const iteraciones = ( value=100 ) =>{
    for(let i = 0; i<=value ; i++){
        console.log("ay vamos")
    }
    return `${value} Iteraciones realizadas`
}

export const MemoHook = () => {
  
    const {counter, increment} = useCounter(100)
    const [bandera, setbandera] = useState(true)

    const memoriValue = useMemo( ()=> iteraciones(counter), [counter]  )
    return (

    <>
    <h1>Counter : <small>{counter}</small> </h1>
    <hr />
    <h4> {memoriValue} </h4>
    <button className='btn btn-succese' onClick={()=>increment(2)} >
        +1
    </button>
    <button className='btn btn-primary' onClick={()=> setbandera( !bandera )  } >
        Show/Hide {JSON.stringify(bandera)}
    </button>
    </>
  )
}
