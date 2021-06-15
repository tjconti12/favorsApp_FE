import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
const Categories = (props) => {
  return (
    <div>
      <h1>{props.categoryName}</h1>
      {/* {props.category.map((one) => (
        <Link to=`/details/:${one}` >
          <div className="category">
            <img className="profile-pic" alt="profile image" />
            <p> short discription? of task</p>
          </div>
        </Link>
      ))} */}

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Categories;
