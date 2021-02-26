import React from 'react';
// import Home from './Home';
import './app.css';
import TodoList from './components/to-do-list/TodoList';
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
      <TodoList />
      {/* <TodoForm /> */}
      {/* <Home /> */}
      {/* <ToDoLists /> */}
      {/* { currentSection } */}
    </div>
  );
}

export default App;
