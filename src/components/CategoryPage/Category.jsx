import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState, useHistory } from "react";
import "./Category.css";
const Categories = (props) => {
  const [category, setCategory] = useState({});
  const history = useHistory;
  
  function checkCategory(categoryName) {
    const category = tasks.filter((task) => {
      task.category === categoryName;
    });
    return setCategory(category);
  }
  useEffect(() => {
    const fetchCategories = async () => {
      const category = await getCategory();
    };
    checkCategory(props.type);
  }, []);

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
