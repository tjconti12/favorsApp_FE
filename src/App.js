import { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./components/HomePage/HomePage";
import TaskForm from "./components/TaskForm/TaskForm";
import Category from "./components/CategoryPage/Category";
import Footer from "./components/Footer/Footer";
import VolunteerModal from "./components/VolunteerModal/VolunteerModal";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";


function App() {
  const [addModalOpen, setAddModalOpen] = useState(false);



  return (
    <div className="App">
      <Switch>
        <Route exact path="/home">
          <HomePage setAddModalOpen={setAddModalOpen} />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        {/* <Route exact path="/add">
          <TaskForm />
        </Route> */}
        <Route exact path="/shopping">
          <Category category="shopping" />
        </Route>
        <Route exact path="/caretaking">
          <Category category="caretaking" />
        </Route>
        <Route exact path="/cleaning">
          <Category category="cleaning" />
        </Route>
        <Route exact path="/transportation">
          <Category category="transportation" />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        {/* <Route exact path="/details">
          <Details />
        </Route> */}
      </Switch>
      <Footer setAddModalOpen={setAddModalOpen}/>
      {addModalOpen ? <TaskForm setAddModalOpen={setAddModalOpen}/> : <></>}
    </div>
  );
}

export default App;
