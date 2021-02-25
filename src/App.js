import React from 'react';
import Home from './Home';
import './app.css';
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
      <Home />
      {/* <ToDoLists /> */}
      {/* { currentSection } */}
    </div>
  );
}

export default App;
