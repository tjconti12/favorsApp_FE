import React from "react";
import "./Details.css";

const Details = (props) => {
  return (
    <div>
      <img className="profile-pic" alt="user-profile" />
      <p>userName</p>
      <p>Task Name</p>
      <p>description of task</p>
      <button>Accept</button>
    </div>
  );
};

export default Details;
