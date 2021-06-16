import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import StoreIcon from "@material-ui/icons/Store";
import { Avatar } from "@material-ui/core";
import "./Category.css";
import VolunteerModal from "../VolunteerModal/VolunteerModal";
const Categories = (props) => {
  const [category, setCategory] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
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
      {modalOpen ? <VolunteerModal setModalOpen={setModalOpen}/> : <></>}
      <h2 className="category-name">
        <StoreIcon /> {props.category}
      </h2>
      {/* {props.category.map((one) => (
        <Link to=`/details/:${one}` >
          <div className="category">
            <img className="profile-pic" alt="profile image" />
            <p> short discription? of task</p>
          </div>
        </Link>
      ))} */}

      <button onClick={() => setModalOpen(true)}>
        <div className="category">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className="user-deets">
            <p id="user-name">userName</p>
            <p className="task-title"> Task Title</p>
          </div>
          <div id="due-dates">
            <p>due date</p>
          </div>
        </div>
      </button>
      
    </div>
  );
};

export default Categories;
