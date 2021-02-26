import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodoList = [...todos, todo];
        setTodos(newTodoList);
    }

    const todoCompleted = id => {
        let updateTodo = todos.map( todo => (
            todo.id === id
            ? todo.isCompleted = !todo.isCompleted
            : todo
        ))
        setTodos(updateTodo);
    }

    return (
        <div>
            <Todo todos={todos} todoCompleted={todoCompleted}/>
            <TodoForm todos={todos} onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
