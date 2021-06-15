import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Favors App</h1>
      <Link to="/">Home</Link>
      <Link to="/schedule">My Schedule</Link>
      <Link to="/add">Add Task</Link>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/add">
          <TaskForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
