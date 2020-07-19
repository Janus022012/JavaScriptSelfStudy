import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/takasho_logo.png';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    logo: {
      marginLeft: "10px"
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab
    },
    tab_button: {
        ...theme.typography.tab_Button
    }
}));

export const Header = (props) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Toolbar disableGutters>
                    <Button className={classes.logo}>
                        <img alt="Takasho Demo" src={logo}/>
                    </Button>
                    <Tabs className={classes.tabContainer}>
                        <Tab label="ショールーム" className={classes.tab}/>
                        <Tab label="企業情報" className={classes.tab}/>
                        <Tab label="経営理念" className={classes.tab}/>
                        <Tab label="事業情報" className={classes.tab}/>
                        <Tab label="投資家情報" className={classes.tab}/>
                        <Tab label="採用情報" className={classes.tab}/>
                    </Tabs>
                    <Button className={classes.tab_button}>
                        Global Website
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}
