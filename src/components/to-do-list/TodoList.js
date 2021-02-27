import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import './todolist.css';

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
        <div className="todo--list">
            <h1 className="todo--list__title">Todo list</h1>
            <Todo todos={todos} todoCompleted={todoCompleted}/>
            <TodoForm todos={todos} onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
