import { useState } from 'react';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddIcon from '@material-ui/icons/Add';
import * as FooterStyles from './Footer.module.css';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#6200EE",
    },
    label: {
        color: "gray",
    },
  });

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
    const [value, setValue] = useState(0);

    return (
        <MuiThemeProvider theme={theme}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}    
                showLabels
                className={classes.root}
            >
            <BottomNavigationAction selected label="Home" className={classes.label} icon={<HomeIcon />} />
            <BottomNavigationAction label="Schedule" className={classes.label} icon={<DynamicFeedIcon />} />
            <BottomNavigationAction label="Profile" className={classes.label} icon={<AccountBoxIcon />} />
            <BottomNavigationAction label="Add" className={classes.label} icon={<AddIcon />} />
            </BottomNavigation>
        </MuiThemeProvider>
    )
}

export default Footer
