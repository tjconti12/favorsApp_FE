import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import "./Schedule.css";
const Schedule = () => {
  return (
    <div>
      <p className="category-name">My Schedule</p>
      <section>
        <p className="sched-titles">My Requests</p>
        <Divider variant="middle" />
        <Link to="/details" className="category-link" id="profile-reqs">
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
        </Link>
      </section>
      <section>
        <p className="sched-titles">My offers</p>
        <Divider variant="middle" />
      </section>
    </div>
  );
};

export default Schedule;
