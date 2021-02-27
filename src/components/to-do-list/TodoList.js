import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';
import './todolist.css';

const TodoList = ({taskName, taskId}) => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodoList = [...todos, todo];
        setTodos(newTodoList);
    };
    console.log('todos', todos)

    const todoCompleted = id => {
        let updateTodo = todos.map( todo => (
            todo.id === id
            ? todo.isCompleted = !todo.isCompleted
            : todo
        ))
        setTodos(updateTodo);
    };

    return (
        <div>
            <div className="todo--list">
                <h1 className="todo--list__title">{taskName}</h1>
                {todos.length !== 0 && todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo} 
                        todoCompleted={todoCompleted}
                    />
                    )
                )}
                <TodoForm todos={todos} onSubmit={addTodo}/>
            </div>
        </div>
    )
}

export default TodoList
