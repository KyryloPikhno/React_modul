import css from './todo.module.css'

const Todo = ({todo}) => {

    return(<div className={css.box}>
        <h3>user id: {todo.userId}</h3>
        <h3>id: {todo.id}</h3>
        <h3>title: {todo.title}</h3>
        <h3>completed: {todo.completed.toString()}</h3>
    </div>)
};

export{Todo}