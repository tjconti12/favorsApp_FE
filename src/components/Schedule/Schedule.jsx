import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { useEffect, useState, useHistory } from "react";
import "./Schedule.css";
const Schedule = () => {
  const [data, setData] = useState(undefined);
  const [userReqs, setUserReqs] = useState([]);
  const [userOffers, setUserOffers] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("user"));

  const getData = async () => {
    try {
      const response = await fetch(
        "https://gudeeds-database.herokuapp.com/tasks"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  function grabUserData() {
    let yourReqs = [];
    data.map((task) => {
      if (task.createdBy === user.username) {
        yourReqs.push(task);
      }
      setUserReqs(yourReqs);
    });
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div>
      {data ? console.log(data) : console.log("no data?")}
      {console.log(userReqs.length)}
      <p className="category-name">My Schedule</p>
      <section>
        <p className="sched-titles">My Requests</p>
        <Divider variant="middle" />
        {userReqs.length !== 0 ? (
          userReqs.map((req) => {
            return (
              <Link to="/details" className="category-link" id="profile-reqs">
                <div className="category">
                  <Avatar
                    alt={user.username}
                    src="/static/images/avatar/1.jpg"
                  />
                  <div className="user-deets">
                    <p id="user-name">{user?.username}</p>
                    <p className="task-title">{req.title}</p>
                  </div>
                  <div id="due-dates">
                    <p>{req.dueDate}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="no-reqs">You have no current requests</p>
        )}
      </section>
      <section>
        <p className="sched-titles">My offers</p>
        <Divider variant="middle" />
        {userOffers.length !== 0 ? (
          userOffers.map((offer) => {
            return (
              <Link to="/details" className="category-link" id="profile-reqs">
                <div className="category">
                  <Avatar
                    alt={user.username}
                    src="/static/images/avatar/1.jpg"
                  />
                  <div className="user-deets">
                    <p id="user-name">{user?.username}</p>
                    <p className="task-title">{offer.title}</p>
                  </div>
                  <div id="due-dates">
                    <p>{offer.dueDate}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p className="no-reqs">You have no current offers</p>
        )}
      </section>
    </div>
  );
};

export default Schedule;
