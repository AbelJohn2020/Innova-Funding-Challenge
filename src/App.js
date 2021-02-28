import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <div className="App">
      <Router>
        <Route>
          <Home 
            path='/' 
            boardsList={boardsList} 
            setBoardsList={setBoardsList}
            isTodoOpen={isTodoOpen}
            setIsTodoOpen={setIsTodoOpen}
            selectedTodo={selectedTodo}
            setSelectedTodo={setSelectedTodo}
          />
        </Route>
        <Route>
          <TaskList 
              path='/tasks' 
              isTodoOpen={isTodoOpen}
              setIsTodoOpen={setIsTodoOpen}
              boardsList={boardsList} 
              setBoardsList={setBoardsList}
              selectedTodo={selectedTodo}
            />
        </Route>
      </Router>
    </div>
  );
}

export default App;
