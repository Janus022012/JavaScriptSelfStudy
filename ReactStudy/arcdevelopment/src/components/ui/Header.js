import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
        marginBottom: '3em',
        [theme.breakpoints.down("md")]:{
            marginBottom: '2em'
        },
        [theme.breakpoints.down("xs")]:{
            marginBottom: '1.25em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down("md")]:{
            height: '7em'
        },
        [theme.breakpoints.down("xs")]:{
            height: '5.5em'
        }
    },
    tabContainer: {
        // autoは親要素よりも大きくなる事がなく、かつ出来る限り拡張するため、マージンが左全体を占める事になる。
        marginLeft: 'auto',
    },
    logoContainer: {
        padding: 0,
        // ホバーしている時のカバーの色を透明にする。
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
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: "white",
        borderRadius: 0
    },
    menuItem:{
        ...theme.typography.tab,
        // ホバーしている時のカバーの文字の色を透明にする。
        opacity: 0.7,
        "&:hover":{
            opacity: 1
        }
    },
    drawer:{
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.arcBlue
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.arcOrange
    },
    drawerSelectedItem: {
        ...theme.typography.tab,
        opacity: 1
    }
}));

// eslint-disable-next-line no-unused-vars
export const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleChange = (e, newValue) => {
      setValue(newValue);
  };

  const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
  };

  const handleClose = (e) => {
      setAnchorEl(null);
      setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
      setAnchorEl(null);
      setOpenMenu(false);
      setSelectedIndex(i);
  };

  const menuOptions = [
        {name: "Services", link: "/services"},
        {name: "Custom Software Development", link: "/customsoftware"},
        {name: "Mobile App Development", link: "/mobileapps"},
        {name: "WebSite Development", link: "/websites"}
    ]

  useEffect(() => {
      const pathName = window.location.pathname;
      switch(pathName){
          case "/":
              if (value !== 0)
                setValue(0);
              break;
          case "/services":
              if (value !== 1)
                  setValue(1);
                  setSelectedIndex(0);
              break;
          case "/revolution":
              if (value !== 2)
                  setValue(2);
              break;
          case "/about":
              if (value !== 3)
                  setValue(3);
              break;
          case "/customsoftware":
              if (value !== 1)
                  setValue(1);
                  setSelectedIndex(1);
              break;
          case "/mobileapps":
              if (value !== 1)
                  setValue(1);
                  setSelectedIndex(2);
              break;
          case "/websites":
              if (value !== 1)
                  setValue(1);
                  setSelectedIndex(3);
              break;
          case "/contact":
              if (value !== 4)
                  setValue(4);
              break;
      }
  }, {value});


  const tabs = (
        <React.Fragment>
            <Tabs className={classes.tabContainer}
                  value={value}
                  indicatorColor="secondary"
                  onChange={handleChange}
            >
                <Tab className={classes.tab} component={Link} to="/" label="Home" disableRipple/>
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/services"
                    label="Services"
                    disableRipple
                    // anchorElはメニューの位置を設定するためのDOM要素を指す。
                    // aria-ownsはどのDOM要素がListとして子要素になるのかを示す。
                    aria-owns={anchorEl ? "simple-menu": undefined}
                    // aria-haspopはポップアップメニューが存在する事を示す。
                    aria-haspopup={anchorEl ? "true": undefined}
                    onMouseOver={event => handleClick(event)}
                />
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
            <Menu
                classes={{paper: classes.menu}}
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                // これによってマウスが対象要素から出た場合に閉じる事が可能になる。
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        // keyは動的に変更されるコンポーネントにおいてそのコンポーネントを特定するために使用されるらしい。
                        key={option}
                        component={Link}
                        to={option.link}
                        classes={{root: classes.menuItem}}
                        onClick={
                            (event) =>
                            {
                                handleMenuItemClick(event, i);
                                setValue(1);
                                handleClose(event);
                            }
                        }
                        selected={i === selectedIndex && value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
  );

  const drawer = (
      <React.Fragment>
          <SwipeableDrawer onClose={() => {setOpenDrawer(false)}}
                           onOpen={() => {setOpenDrawer(true)}}
                           open={openDrawer}
                           classes={{paper: classes.drawer}}
                          >
                <List>
                    <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(0)}}
                              component={Link} to="/"
                              selected={value === 0}
                              disableTypography>
                        <ListItemText className={value === 0 ? classes.drawerSelectedItem:classes.drawerItem}>Home</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(1)}}
                              component={Link} to="/services"
                              selected={value === 1}
                              disableTypography>
                        <ListItemText className={value === 1 ? classes.drawerSelectedItem:classes.drawerItem}>Services</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(2)}}
                              component={Link} to="/revolution"
                              selected={value === 2}
                              disableTypography>
                        <ListItemText className={value === 2 ? classes.drawerSelectedItem:classes.drawerItem}>Revolution</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(3)}}
                              component={Link} to="/contact"
                              selected={value === 3}
                              disableTypography>
                        <ListItemText className={value === 3 ? classes.drawerSelectedItem:classes.drawerItem}>Contact</ListItemText>
                    </ListItem>
                    <ListItem divider button onClick={() => {setOpenDrawer(false); setValue(4)}}
                              selected={value === 4}
                              className={classes.drawerItemEstimate} component={Link} to="/estimate" disableTypography>
                        <ListItemText className={value === 4 ? classes.drawerSelectedItem:classes.drawerItem}>Free Estimate</ListItemText>
                    </ListItem>
                </List>
          </SwipeableDrawer>
          <IconButton onClick={() => {setOpenDrawer(!openDrawer)}}
                      className={classes.drawerIconContainer}
                      disableRipple>
              <MenuIcon className={classes.drawerIcon}/>
          </IconButton>
      </React.Fragment>
  )

  return (
        // eslint-disable-next-line react/jsx-filename-extension
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} component={Link} to="/" disableRipple >
                            <img alt="company log" className={classes.logo} src={logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    );
};
