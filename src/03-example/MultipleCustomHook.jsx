import { useCounter, useFetch } from "../hooks"
import { LoadingQuote } from "./LoadingQuote"
import { Quote } from "./Quote"

export const MultiCustomHook = () => {

    const {counter, increment} = useCounter(1)
    
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const {author, quote} = !!data && data[0] //=> si la data tiene un valor entonces toma la data en la posicion 0
   // console.log({ data })
    
   

    return (
     
    <>
      <h1> BreakingBad Quotes </h1>
      <hr />
        {
            isLoading
             ? <LoadingQuote/>
            :  <Quote author={author} quote={quote}  />
            
        }
       
        <button  className="btn btn-primary" disabled={isLoading} onClick={ () => {increment(1) }  } > Next quote  </button>

        <blockquote className="blockquote text-end" >
                    <p className="mb-1" ><i className="fa-brands fa-react"></i>React</p>
                    <footer className="blockquote-footer" > Jerardo Romero </footer>
        </blockquote>
    </>
  )
}
