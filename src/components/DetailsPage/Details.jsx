import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

const Details = (props) => {
  console.log(ArrowLeftIcon);
  return (
    <div className="details-page">
      <Link to="/">{}</Link>
      <div className="user-detail-info">
        <img className="profile-pic" />
        <div className="details">
          <p>userName</p>
          <p>Category</p>
          <p>Need by: 9:00AM</p>
        </div>
      </div>

      <p>
        description of task Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Incidunt sunt dolorem aut, ut, tempore laudantium quae nemo iure
        in aliquam nobis numquam error ipsam reprehenderit consectetur id
        distinctio corrupti harum.
      </p>
      <button className="accept-task">VOLUNTEER</button>
    </div>
  );
};

export default Details;
