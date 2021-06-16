
import { Link, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import TaskForm from "./components/TaskForm/TaskForm";
import Category from "./components/CategoryPage/Category";
import Details from "./components/DetailsPage/Details";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>Güdeeds</h1>
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
        <Route exact path="/shopping">
          <Category category="shopping" />
        </Route>
        <Route exact path="/caretaking">
          <Category category="caretaking" />
        </Route>
        <Route exact path="/details">
          <Details />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
