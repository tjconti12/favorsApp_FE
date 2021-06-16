import { useState, Link } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as FooterStyles from './Footer.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const theme = createMuiTheme({
      overrides: {
          MuiBottomNavigationAction: {
              root: {
                "&$selected": {
                    color: "white"
                },
              }
          }
      }
  })


const Footer = () => {
    const classes = useStyles();
    // const [value, setValue] = useState(0);
    // <Link to="/">Home</Link>
    // <Link to="/schedule">My Schedule</Link>
    // <Link to="/add">Add Task</Link>

    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <IconButton>
                        <DynamicFeedIcon />
                    </IconButton>
                    <IconButton>

                    </IconButton>

                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
}

export default Footer






// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>

//     </div>
//   );
// }