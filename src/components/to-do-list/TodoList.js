import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

import './todolist.css';

const TodoList = ({taskName, }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodoList = [...todos, todo];
        setTodos(newTodoList);
    };

    return (
        <div>
            <div className="todo--list">
                <h1 className="todo--list__title">{taskName}</h1>
                <div className="todo--list__task">   
                    {todos.length !== 0 && todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                        />
                        )
                    )}
                </div>
                <TodoForm todos={todos} onSubmit={addTodo}/>
            </div>
        </div>
    )
}

export default TodoList
