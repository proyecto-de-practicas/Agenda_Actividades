import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'


/* import { CounterApp } from './01-useState/CounterApp'
import { CallbackHook } from './06-MEMOS/CallbackHook'
import { MemoHook } from './06-MEMOS/MemoHook'
import { Memorize } from './06-MEMOS/Memorize'
import { Layout } from './05-useLayouEffect/Layout'
import { FocusScreen } from './04-useRef/FocusScreen'
import { MultiCustomHook } from './example/MultipleCustomHook'
import { Lujirua } from './example/lujuria'
import { HookApp } from './HookApp'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { CounterWithCustomHook } from './01-useState/counterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import './08-useReducer/intro-reducer'
*/
import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'
import './efectos/efecto.js'

import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <React.StrictMode> */}
             <TodoApp/>    
        {/*  </React.StrictMode> */}
    </BrowserRouter>
)
