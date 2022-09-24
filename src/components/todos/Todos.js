import {useEffect, useState} from "react";

import {todoAxiosService} from "../../services";
import {Todo} from "../todo/Todo";
import css from './todos.module.css'


const Todos = () => {

 const [todos, setTodos] = useState([])

    useEffect(()=>{
        todoAxiosService.getAll()
            .then(({data})=>setTodos(data))
    },[])

    return(<div className={css.todos}>
        {
            todos.map(todo=> <Todo todo={todo} key={todo.id}/>)
        }
    </div>)
};

export{Todos}