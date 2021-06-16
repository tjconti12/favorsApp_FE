import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./components/HomePage/HomePage";
import TaskForm from "./components/TaskForm/TaskForm";
import Category from "./components/CategoryPage/Category";
import Footer from "./components/Footer/Footer";
import VolunteerModal from "./components/VolunteerModal/VolunteerModal";

function App() {
  return (
    <div className="App">
      <h1>Güdeeds</h1>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
