import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [logout, setLogout] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home
              boardsList={boardsList} 
              setBoardsList={setBoardsList}
              isTodoOpen={isTodoOpen}
              setIsTodoOpen={setIsTodoOpen}
              selectedTodo={selectedTodo}
              setSelectedTodo={setSelectedTodo}
              logout={logout}
              setLogout={setLogout}
            />
          </Route>
          <Route exact path='/tasks/:taskId'>
            <TaskList 
                isTodoOpen={isTodoOpen}
                setIsTodoOpen={setIsTodoOpen}
                boardsList={boardsList} 
                setBoardsList={setBoardsList}
                selectedTodo={selectedTodo}
                logout={logout}
                setLogout={setLogout}
              />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
