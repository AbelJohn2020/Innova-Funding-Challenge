import React, {useState} from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './Todo.css';

const Todo = ({
    todo, 
    todoId,
    todos,
    setTodos,
    selectedTask, 
    setSelectedTask
}) => {
    const [callForm, setCallForm] = useState(false);
    
    return ( 
        <div className='todo-row' onClick={() => setSelectedTask(todoId)}>
            <div key={todo.id} onClick={() => setCallForm(!callForm)}>
                {todo.text}
            </div>
            {
                callForm && 
                    <TaskItem 
                        todo={todo} 
                        todos={todos} 
                        setTodos={setTodos} 
                        callForm={callForm} 
                        setCallForm={setCallForm} 
                        selectedTask={selectedTask}
                    />
            }   
        </div>
    )
}

export default Todo
