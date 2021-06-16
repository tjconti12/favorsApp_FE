import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import * as FooterStyles from './Footer.module.css';
import Fab from '@material-ui/core/Fab';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#6200EE",

      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    taskButton: {
      transform: 'translate(530%, -47%)',
      position: 'absolute',
      backgroundColor: '#03DAC5',
    },
    bar: {
        position: 'fixed',
        bottom: '0',
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


    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar className={classes.root}>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu" 
                        component={RouterLink} to="/Home">
                        <HomeOutlinedIcon />
                    </IconButton>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit"
                        component={RouterLink} to="/schedule">
                        <DynamicFeedIcon />
                    </IconButton>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit"
                        component={RouterLink} to="/profile">
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                    <Fab 
                        className={classes.taskButton}
                        component={RouterLink} to="/add">
                        <AddIcon />
                    </Fab>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
}

export default Footer
