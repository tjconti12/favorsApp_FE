import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import "./Category.css";
const Categories = (props) => {
  const [category, setCategory] = useState({});
  const history = useHistory;

  // function checkCategory(tasks) {
  //   const category = tasks.filter((task) => {
  //     task.category === props.category;
  //   });
  //   return setCategory(category);
  // }

  //useEffect(() => {
  //const fetchTasks = async () => {
  //const category = await getTasks();
  //};
  //checkCategory(props.tasks);
  //}, []);

  return (
    <div>
      <h2 className="category-name">{props.category}</h2>
      {/* {props.category.map((one) => (
        <Link to=`/details/:${one}` >
          <div className="category">
            <img className="profile-pic" alt="profile image" />
            <p> short discription? of task</p>
          </div>
        </Link>
      ))} */}
      <Link to="/details" className="category-link">
        <div className="category">
          <div className="user-deets">
            <img className="profile-pic" />
            <p>userName</p>
          </div>
          <p className="task-description"> Task Title</p>
        </div>
      </Link>
      <Link to="/details" className="category-link">
        <div className="category">
          <div className="user-deets">
            <img className="profile-pic" />
            <p>userName</p>
          </div>
          <p className="task-description"> Task Title</p>
        </div>
      </Link>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Categories;
