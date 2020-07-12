import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg';

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
        height: '7em',
    },
    tabContainer: {
        // autoは親要素よりも大きくなる事がなく、かつ出来る限り拡張するため、マージンが左全体を占める事になる。
        marginLeft: 'auto',
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
    }
}));

// eslint-disable-next-line no-unused-vars
export const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
      setValue(value);
    }

  return (
        // eslint-disable-next-line react/jsx-filename-extension
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img alt="company log" className={classes.logo} src={logo}/>
                        <Tabs className={classes.tabContainer}
                              value={value}
                              indicatorColor="secondary"
                              onChange={handleChange}
                        >
                            <Tab className={classes.tab} label="Home"/>
                            <Tab className={classes.tab} label="Services"/>
                            <Tab className={classes.tab} label="The Revolution"/>
                            <Tab className={classes.tab} label="About us"/>
                            <Tab className={classes.tab} label="Contact us"/>
                        </Tabs>
                        <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
};
