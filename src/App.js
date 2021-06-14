import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Favors App</h1>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
        </Route>
        <Route exact path="/test">
          <h2>Test</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
