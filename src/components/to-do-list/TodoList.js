import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const joinTo = [todo, ...todos];
        setTodos(joinTo);
        console.log('TodoList', joinTo)
    }

    const todoCompleted = id => {
        let updateTodo = todos.map( todo => (
            todo.id === id
            ? todo.isComplete = !todo.isComplete
            : todo
        ))
        setTodos(updateTodo);
    }

    return (
        <div>
            <Todo todos={todos} todoCompleted={todoCompleted}/>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList
