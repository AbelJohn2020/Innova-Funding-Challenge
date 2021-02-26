import React from 'react'

const Todo = ({todos, todoCompleted}) => {
    return todos.map( (newTodo, index) => (
        <div
            className={newTodo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={newTodo.id} onClick={() => todoCompleted(newTodo.id)}>
                {newTodo.text}
            </div>
            
        </div>
    ))
}

export default Todo
