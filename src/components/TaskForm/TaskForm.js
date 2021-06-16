import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ENDPOINT from "../../config/config";

import * as TaskFormStyles from "./TaskForm.module.css";

const TaskForm = () => {
  const [type, setType] = useState("shopping");
  const [redirect, setRedirect] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      type: e.target.type.value,
      title: e.target.title.value,
      description: e.target.description.value,
      dueDate: e.target.dueDate.value,
    };

    const url = ENDPOINT + "/tasks";

    axios
      .post(url, data)
      .then((res) => setTasks([...tasks, res.data]))
      .then((res) => setRedirect(true));
  };

  if (redirect) {
    return <Redirect to={`/${type}`} />;
  }

  return (
    <div>
      <h2 className={TaskFormStyles.title}>Add Event</h2>
      <form className={TaskFormStyles.form} onSubmit={handleSubmit}>
        <div className={TaskFormStyles.type}>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className={TaskFormStyles.select}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="shopping">Shopping</option>
            <option value="caretaking">Caretaking</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>
        <div className={TaskFormStyles.title}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" required />
        </div>
        <div className={TaskFormStyles.date}>
          <label htmlFor="dueDate">Date Due</label>
          <input
            id="dueDate"
            type="datetime-local"
            className={TaskFormStyles.datePicker}
            required
          />
        </div>
        <div className={TaskFormStyles.details}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className={TaskFormStyles.textBox}
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default TaskForm;
