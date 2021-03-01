import React, { useState } from 'react'
import Todo from '../TodoItem/Todo';
import TodoForm from '../TodoItem/TodoForm';
import styles from './TodoList.module.css';

const TodoList = ({taskName}) => {
    const [todos, setTodos] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const addTodo = todo => {
        const newTodoList = [...todos, todo];
        setTodos(newTodoList);
    };

    return (
        <div>
            <div className={styles.TodoList}>
                <h1 className={styles.TodoListTitle}>{taskName}</h1>
                <div className={styles.TodoListTask}>   
                    {todos.length !== 0 && todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            todoId={todo.id}
                            todos={todos}
                            setTodos={setTodos}
                            selectedTask={selectedTask}
                            setSelectedTask={setSelectedTask}
                        />
                        )
                    )}
                </div>
                <TodoForm 
                    todos={todos} 
                    onSubmit={addTodo}
                />
            </div>
        </div>
    )
};

export default TodoList;
