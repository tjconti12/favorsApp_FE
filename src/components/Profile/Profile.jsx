import React from "react";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import * as HomePageStyles from "../HomePage/HomePage.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
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
      <button className="prof-logout">
        <ExitToAppIcon id="logout-icon" />
        <br />
        <span>LOG OUT</span>
      </button>

      <section className="profile-header">
        <Avatar className={classes.large}>S</Avatar>
        <p id="profile-username">Sabrina</p>
        <p id="gudeeds-rate"> 6 Gudeeds</p>
        <p id="profile-bio">
          Mom of two, dog owner, and currently working from home.
        </p>
      </section>

      <section className="profile-request-sec">
        <p id="profile-req">My requests</p>
        <Divider id="divider" variant="middle" />

        <div className="category">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
            S
          </Avatar>
          <div className="user-deets">
            <p id="user-name">Sabrina</p>
            <p className="task-title">Buy milk</p>
          </div>
          <div id="due-dates">
            <p>6/14,10AM</p>
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
