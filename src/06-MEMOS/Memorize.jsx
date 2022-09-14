import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  
    const {counter, increment} = useCounter(1)
    const [bandera, setbandera] = useState(true)
    return (

    <>
    <h1>Counter : <Small value={counter}/> </h1>
    <hr />
    <button className='btn btn-succese' onClick={()=>increment(2)} >
        +1
    </button>
    <button className='btn btn-primary' onClick={()=> setbandera( !bandera )  } >
        Show/Hide {JSON.stringify(bandera)}
    </button>
    </>
  )
}
