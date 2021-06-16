import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import StoreIcon from "@material-ui/icons/Store";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { Avatar } from "@material-ui/core";
import "./Category.css";
import VolunteerModal from "../VolunteerModal/VolunteerModal";

const Categories = (props) => {
  const [category, setCategory] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const history = useHistory;
  const categoryIcons = [StoreIcon, ChildFriendlyIcon, DirectionsCarIcon];
  const seedData = [
    {
      category: "shopping",
      title: "Please Buy Me Milk",
      description:
        "I need milk from Safeway, if someone could please grab some for me today.",
      creationDate: "6/16/2021 9:00AM",
      dueDate: "6/16/2021 3:00PM",
      completed: false,
    },
    {
      category: "shopping",
      title: "Please Buy Me Milk",
      description:
        "I need milk from Safeway, if someone could please grab some for me today.",
      creationDate: "6/16/2021 9:00AM",
      dueDate: "6/16/2021 3:00PM",
      completed: false,
    },
    {
      category: "cleaning",
      title: "Clean the house",
      description:
        "I am looking for someone who can come clean my home twice a week.",
      creationDate: "6/12/2021 7:00AM",
      dueDate: "6/20/2021 5:00PM",
      completed: false,
    },
    {
      category: "caretaking",
      title: "Can anyone babysit this Friday night?",
      description:
        "I need a babysitter from 5:00PM till possibly midnight! You will be compensated.",
      creationDate: "6/16/2021 9:00AM",
      dueDate: "6/18/2021 3:00PM",
      completed: false,
    },
    {
      category: "cleaning",
      title: "Clean the house",
      description:
        "I am looking for someone who can come clean my home twice a week.",
      creationDate: "6/12/2021 7:00AM",
      dueDate: "6/20/2021 5:00PM",
      completed: false,
    },
    {
      category: "caretaking",
      title: "Can anyone babysit this Friday night?",
      description:
        "I need a babysitter from 5:00PM till possibly midnight! You will be compensated.",
      creationDate: "6/16/2021 9:00AM",
      dueDate: "6/18/2021 3:00PM",
      completed: false,
    },
  ];

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
      {modalOpen ? <VolunteerModal setModalOpen={setModalOpen} /> : <></>}
      <h2 className="category-name">
        <StoreIcon /> {props.category}
      </h2>
      {seedData.map((data) => {
        if (data.category === props.category) {
          return (
            <button className="modal-btn" onClick={() => setModalOpen(true)}>
              <div className="category">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="user-deets">
                  <p id="user-name">userName</p>
                  <p className="task-title">{data.title}</p>
                </div>
                <div id="due-dates">
                  <p>{data.dueDate}</p>
                </div>
              </div>
            </button>
          );
        }
      })}
    </div>
  );
};

export default Categories;
