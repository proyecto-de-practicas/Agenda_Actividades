
const initialState =[{
    id: 1,
    todo: 'Recolectar el equipo',
    done : false,
}]

const todoReducer = (state = initialState, action = {} )=>{
    
    if(action.type === '[TODO] add todo' ){
        return [...state, action.playload]
    }
    return state
}

let todos = todoReducer()

const newtodo ={
    id: 2,
    todo: 'Asignar tareas al equipo',
    done : false,
}

const addTodoAction = {
    type :'[TODO] add todo',
    playload: newtodo,
}

todos = todoReducer(todos,addTodoAction)

console.log({state: todos})