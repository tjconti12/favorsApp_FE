import { Link ,Redirect} from "react-router-dom";
import React,{ useEffect, useState } from "react";
import StoreIcon from "@material-ui/icons/Store";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { Avatar } from "@material-ui/core";

import VolunteerModal from "../VolunteerModal/VolunteerModal";
import "./Category.css";

const Categories = (props) => {
  const [data, setData] = useState(undefined);
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState({});

  const [modalOpen, setModalOpen] = useState(false);
  const categoryIcons = [StoreIcon, ChildFriendlyIcon, DirectionsCarIcon];

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

   if (!props.loggedIn) return <Redirect to='/' />

  return (
    <div>
      {modalOpen ? (
        <VolunteerModal
          setModalOpen={setModalOpen}
          selected={selected}
          category={props.category}
        />
      ) : (
        <></>
      )}
      <h2 className="category-name">
        <StoreIcon /> {props.category}
      </h2>

      {category.length !== 0 ? (
        category.map((task) => {
          return (
            <button
              className="modal-btn"
              onClick={() => {
                setModalOpen(true);
                setSelected(task);
              }}
            >
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
