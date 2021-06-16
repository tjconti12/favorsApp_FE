import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import ENDPOINT from "../../config/config";

const Register = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      profileIcon: e.target.profile.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const url = ENDPOINT + "/users/register";

    axios.post(url, data).then((res) => setRedirect(true));
  };

  const profileIcons = {
    "duck": "https://i.imgur.com/qhET4ZS.png",
    "fox": "https://i.imgur.com/I9mE8md.png",
    "dog": "https://i.imgur.com/XtDL5Ku.png",
    "elephant": "https://i.imgur.com/9pVLnkz.png",
    "giraffe": "https://i.imgur.com/Do0e957.png",
    "lion": "https://i.imgur.com/gMZXcAT.png",
    "cat": "https://i.imgur.com/VT1EKbo.png",
    "owl": "https://i.imgur.com/aMVMOhg.png"
}

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register-page">
      <center>
        <h1>Sign Up!</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <center>
          <label htmlFor="profile-icon">Profile Icon</label>
          <select id="profile" name="profile-icon">
            <option value="sample1">Sample1</option>
            <option value="sample2">Sample2</option>
            <option value="sample3">Sample3</option>
          </select>
        </center>
        <center>
          <label htmlFor="username">Username:</label>
          <input id="username" className="register-field" type="text" />
        </center>
        <br />
        <center>
          <label htmlFor="password">Password:</label>
          <input id="password" className="register-field" type="password" />
        </center>
        <center>
          <br />
          <button type="submit">Register</button>
        </center>
      </form>
      <Link to="/">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Register;
