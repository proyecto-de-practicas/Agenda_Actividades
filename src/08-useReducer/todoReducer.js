export const todoReducer = ( initialState = [], action  ) =>{

    switch (action.type) {
        case '[TODO] Add Todo':

            return [...initialState, action.payload]
            /* throw new Error('action.type ABC no esta implementada') */
          /*   break; */
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ) //FILTE REGRESA UN NUEVO ARREGLO
        case '[TODO] True Todo':
            return initialState.map(
                todo => {
                    if (todo.id === action.payload){
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo
                })
        default:
           return initialState
    }
}