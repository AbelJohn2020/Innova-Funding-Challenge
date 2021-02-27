import React from 'react';
import './todo.css';

const Todo = ({todos, todoCompleted}) => {
    return todos.map( (todo, index) => (
        <div
            className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => todoCompleted(todo.id)}>
                {todo.text}
            </div>
            
        </div>
    ))
}

export default Todo
