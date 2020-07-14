import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";

export const ElevationScroll = (props) => {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
    },
    logo: {
        height: '8em',
    },
    tabContainer: {
        // autoは親要素よりも大きくなる事がなく、かつ出来る限り拡張するため、マージンが左全体を占める事になる。
        marginLeft: 'auto',
    },
    logoContainer: {
        padding: 0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
}));

// eslint-disable-next-line no-unused-vars
export const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
      setValue(value);
    }

  useEffect(() => {
      const pathName = window.location.pathname;
      switch(pathName){
          case "/":
              setValue(0);
              break;
          case "/services":
              setValue(1);
              break;
          case "/revolution":
              setValue(2);
              break;
          case "/about":
              setValue(3);
              break;
          case "/contact":
              setValue(4);
              break;
      }
  }, {value})

  return (
        // eslint-disable-next-line react/jsx-filename-extension
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} component={Link} to="/" disableRipple >
                            <img alt="company log" className={classes.logo} src={logo}/>
                        </Button>
                        <Tabs className={classes.tabContainer}
                              value={value}
                              indicatorColor="secondary"
                              onChange={handleChange}
                        >
                            <Tab className={classes.tab} component={Link} to="/" label="Home" disableRipple/>
                            <Tab className={classes.tab} component={Link} to="/services" label="Services" disableRipple/>
                            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" disableRipple/>
                            <Tab className={classes.tab} component={Link} to="/about" label="About us" disableRipple/>
                            <Tab className={classes.tab} component={Link} to="/contact" label="Contact us" disableRipple/>
                        </Tabs>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={Link}
                            to="/estimate"
                        >
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
};
