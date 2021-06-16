import React from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import * as HomePageStyles from "../HomePage/HomePage.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import "./Profile.css";
const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const classes = useStyles();




  
  return (
    <div>
      <section className="profile-header">
        <Avatar className={classes.large}>S</Avatar>
        <p id="profile-username">Sabrina</p>
        <p id="gudeeds-rate">Gudeeds Rating</p>
        <p id="profile-bio">Bio Information</p>
      </section>

      <section className="profile-request-sec">
        <p id="profile-req">My requests</p>
        <Divider id="divider" variant="middle" />

        <div className="category">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <div className="user-deets">
            <p id="user-name">userName</p>
            <p className="task-title">Title</p>
          </div>
          <div id="due-dates">
            <p>dueDate</p>
          </div>
        </div>

        <div>
          <Link to="/add" className={HomePageStyles.link} id="task-words">
            <div className={HomePageStyles.teal} id="task-location">
              <AddIcon />
              <span>ADD A TASK</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Profile;
