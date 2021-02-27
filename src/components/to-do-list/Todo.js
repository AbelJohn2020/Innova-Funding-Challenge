import React from 'react';
import './todo.css';

const Todo = ({todo}) => {
    console.log('todo', todo)
    return ( 
        <div className='todo-row'>
            <div key={todo.id}>
                {todo.text}
            </div>       
        </div>
    )
}

export default Todo
