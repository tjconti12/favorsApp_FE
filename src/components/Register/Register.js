import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import ENDPOINT from "../../config/config";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import "./Register.css";

const Register = () => {
  const [redirect, setRedirect] = useState(false);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

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

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="register-page">
      <center>
        <h1>Sign Up!</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <center>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Profile Icon</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value="sample1" className="menu-items">
                Sample1
              </MenuItem>
              <MenuItem value="sample2">Sample2</MenuItem>
              <MenuItem value="sample3">Sample 3</MenuItem>
            </Select>
          </FormControl>
        </center>
        <center>
          <FormControl variant="outlined">
            <InputLabel htmlFor="username">Username</InputLabel>
            <OutlinedInput
              id="username"
              className="register-field"
              type="text"
              label="username"
            />
          </FormControl>
        </center>
        <br />
        <center>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              id="component-outlined"
              className="register-field"
              type="password"
              label="password"
            />
          </FormControl>
        </center>

        <center>
          <br />
          <button id="register" type="submit">
            SIGN UP!
          </button>
        </center>
      </form>
    </div>
  );
};

export default Register;
