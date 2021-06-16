import { Link, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Schedule from "./components/Schedule/Schedule";
import HomePage from "./components/HomePage/HomePage";
import TaskForm from "./components/TaskForm/TaskForm";
import Category from "./components/CategoryPage/Category";
import VolunteerModal from "./components/VolunteerModal/VolunteerModal";

function App() {
  return (
    <div className="App">
      <h1>Güdeeds</h1>
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
        <Route exact path="/schedule">
          <Schedule />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
