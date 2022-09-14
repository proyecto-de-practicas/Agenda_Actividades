import {memo} from 'react'

export const Small = memo( ({value}) => {
    console.log("Dibujo")
    return (
    <small>{value}</small>
  )
})
