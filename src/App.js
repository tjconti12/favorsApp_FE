import { Link, Route, Switch } from 'react-router-dom';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Favors App</h1>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Link to="/add">Add Task</Link>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
        </Route>
        <Route exact path="/test">
          <h2>Test</h2>
        </Route>
        <Route exact path="/add">
          <TaskForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
