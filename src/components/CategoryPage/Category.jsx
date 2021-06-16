import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import StoreIcon from "@material-ui/icons/Store";
import { Avatar } from "@material-ui/core";
import "./Category.css";
import VolunteerModal from "../VolunteerModal/VolunteerModal";
const Categories = (props) => {

  const [data, setData] = useState(undefined);
  const [category, setCategory] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory;

  const getData = async () => {
    try {
      const response = await fetch('https://gudeeds-database.herokuapp.com/tasks')
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
  
  if (data === undefined) {
    return (
      <h1>Loading</h1>
    )
  }

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
      

      {data.map(task => {
        return (
          <button onClick={() => setModalOpen(true)}>
            <div className="category">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <div className="user-deets">
                <p id="user-name">{task.createdBy}</p>
                <p className="task-title">{task.title}</p>
              </div>
              <div id="due-dates">
                <p>{task.dueDate.split('T')[0]}</p>
              </div>
            </div>
          </button>
        )
      })}
      
    </div>
  );
};

export default Categories;
