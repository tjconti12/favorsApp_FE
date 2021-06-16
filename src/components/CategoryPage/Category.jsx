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
  const [data, setData] = useState(undefined);
  const [category, setCategory] = useState([]);
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

  const getData = async () => {
    try {
      const response = await fetch(
        "https://gudeeds-database.herokuapp.com/tasks"
      );
      const data = await response.json();
      setData(data);
      let results = [];
      data.map((tasks) => {
        if (tasks.type === props.category) {
          results.push(tasks);
        }
      });
      setCategory(results);
      console.log(category);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === undefined || category === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {modalOpen ? <VolunteerModal setModalOpen={setModalOpen} /> : <></>}
      <h2 className="category-name">
        <StoreIcon /> {props.category}
      </h2>

      {category.length !== 0 ? (
        category.map((task) => {
          return (
            <button className="modal-btn" onClick={() => setModalOpen(true)}>
              <div className="category">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <div className="user-deets">
                  <p id="user-name">{task.createdBy}</p>
                  <p className="task-title">{task.title}</p>
                </div>
                <div id="due-dates">
                  <p>{task.dueDate.split("T")[0]}</p>
                </div>
              </div>
            </button>
          );
        })
      ) : (
        <p>No Current Requests</p>
      )}
    </div>
  );
};

export default Categories;
