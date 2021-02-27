import React, {useState} from 'react';
import Form from './form-change-todo/Form';
import './todo.css';

const Todo = ({todo,}) => {
    const [callForm, setCallForm] = useState(false);
    console.log('todo', todo)
    console.log(callForm)
    return ( 
        <div className='todo-row'>
            <div key={todo.id} onClick={() => setCallForm(!callForm)}>
                {todo.text}
            </div>
            {
                callForm && <Form todo={todo} callForm={callForm} setCallForm={setCallForm}/>
            }   
        </div>
    )
}

export default Todo
