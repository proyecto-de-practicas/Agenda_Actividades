import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({quote, author}) => {

  const [boxSize, setboxSize] = useState({height:0, width:0})
  const pRef = useRef()
  useLayoutEffect(() => {

   const {height, width}= pRef.current.getBoundingClientRect()
    setboxSize({height, width})
  
    
  }, [quote])
  return (
    <>  
    <blockquote className="blockquote text-righ"  style={{display: 'flex'}}>
        <p className="mb-1"  ref={pRef} >{quote}</p>
        <div className="blockquote-footer" > {author} </div>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
