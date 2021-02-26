import React from 'react';
// import Home from './Home';
import './app.css';
import Form from './components/to-do-list/form-change-todo/Form';
// import TodoList from './components/to-do-list/TodoList';
// import TodoForm from './components/to-do-list/TodoForm';
// import ToDoLists from './components/ToDoLists';

function App() {
  // const [route, setRoute] = useState("Home");

  // let currentSection = null;

  // switch (route) {
  //   case "Home":
  //     currentSection = <ToDoLists goto={setRoute}/>
  //     break;
  //   case "ToDoLists":
  //     currentSection = <Home goto={setRoute}/>
  //     break;
  // }

  return (
    <div className="App">
      <Form />
      {/* <TodoList /> */}
      {/* <TodoForm /> */}
      {/* <Home /> */}
      {/* <ToDoLists /> */}
      {/* { currentSection } */}
    </div>
  );
}

export default App;
