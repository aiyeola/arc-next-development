// @ts-nocheck
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactGA from 'react-ga';

import Link from 'src/Link';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3.3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2.3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    textTransform: 'none',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    // @ts-ignore
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    // @ts-ignore
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 50,
    marginRight: 25,
    height: 45,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    // @ts-ignore
    backgroundColor: theme.palette.common.blue,
    color: theme.palette.common.white,
    borderRadius: 0,
    zIndex: 1302,
  },
  menuItem: {
    // @ts-ignore
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    // @ts-ignore
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    // @ts-ignore
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    // @ts-ignore
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    '&.Mui-expanded': {
      margin: 0,
      borderBottom: 0,
    },
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
  expansionDetails: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.primary.light,
  },
  summaryRoot: {
    backgroundColor: (props) =>
      props.value === 1 ? 'rgba(0, 0, 0, 0.14)' : 'inherit',
    '&.Mui-expanded': {
      minHeight: 0,
    },
  },
  summary: {
    margin: 0,
    '&.Mui-expanded': {
      margin: 0,
    },
  },
}));

function Header({ value, setValue, selectedIndex, setSelectedIndex }) {
  const props = { value, setValue, selectedIndex, setSelectedIndex };
  const classes = useStyles(props);
  const theme = useTheme();
  // @ts-ignore
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // @ts-ignore
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEL] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  // @ts-ignore
  const handleChange = (e, newValue) => setValue(newValue);

  const handleClick = (e) => {
    setAnchorEL(e.currentTarget);
    setOpenMenu(true);
  };

  // @ts-ignore
  const handleClose = (e) => {
    setAnchorEL(null);
    setOpenMenu(false);
  };

  // @ts-ignore
  const handleMenuItemClick = (e, i) => {
    setAnchorEL(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const menuOptions = [
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'iOS/ Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          if (value !== 5) {
            setValue(false);
          }
          break;
        default:
          break;
      }
    });
  }, [menuOptions, routes, selectedIndex, setSelectedIndex, setValue, value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          // @ts-ignore
          <Tab
            key={`${route}~${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        href="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          setValue(false);
          ReactGA.event({
            category: 'Estimate',
            action: 'Desktop Header Pressed',
          });
        }}
      >
        Free estimate
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'top left',
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                  autoFocusItem={false}
                  disablePadding
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {menuOptions.map(({ name, link }, index) => (
                    <MenuItem
                      key={`${name}${link}`}
                      onClick={(e) => {
                        handleMenuItemClick(e, index);
                        handleClose(e);
                        setValue(1);
                      }}
                      // @ts-ignore
                      component={Link}
                      href={link}
                      classes={{ root: classes.menuItem }}
                      selected={
                        index === selectedIndex &&
                        value === 1 &&
                        window.location.pathname !== '/services'
                      }
                    >
                      {name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) =>
            route.name === 'Services' ? (
              <Accordion
                elevation={0}
                classes={{ root: classes.expansion }}
                key={`${route}${index}`}
              >
                <AccordionSummary
                  classes={{
                    root: classes.summaryRoot,
                    content: classes.summary,
                  }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <Link href={route.link} color="inherit">
                    <ListItemText
                      className={classes.drawerItem}
                      style={{ opacity: value === 1 ? 1 : null }}
                      onClick={() => {
                        setOpenDrawer(false);
                        setValue(route.activeIndex);
                      }}
                      disableTypography
                    >
                      {route.name}
                    </ListItemText>
                  </Link>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {menuOptions.map((routeM, index) => (
                      <Grid item key={`${routeM}_${index}`}>
                        <ListItem
                          button
                          divider
                          // @ts-ignore
                          component={Link}
                          href={routeM.link}
                          selected={
                            selectedIndex === routeM.selectedIndex &&
                            value === 1 &&
                            window.location.pathname !== '/services'
                          }
                          classes={{ selected: classes.drawerItemSelected }}
                          onClick={() => {
                            setOpenDrawer(false);
                            setSelectedIndex(routeM.selectedIndex);
                          }}
                          className={classes.drawerItem}
                        >
                          <ListItemText disableTypography>
                            {routeM.name}
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={`${route}${index}`}
                button
                divider
                // @ts-ignore
                component={Link}
                href={route.link}
                selected={value === route.activeIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeIndex);
                }}
                className={
                  value === route.activeIndex
                    ? clsx(classes.drawerItem, classes.drawerItemSelected)
                    : classes.drawerItem
                }
              >
                <ListItemText disableTypography>{route.name}</ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(false);
              ReactGA.event({
                category: 'Estimate',
                action: 'Mobile Header Pressed',
              });
            }}
            button
            divider
            // @ts-ignore
            component={Link}
            href="/estimate"
            className={classes.drawerItemEstimate}
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? clsx(classes.drawerItem, classes.drawerItemSelected)
                  : classes.drawerItem
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
              style={{ textDecoration: 'none' }}
            >
              <svg
                className={classes.logo}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway;
               font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  style={{ fontSize: 57 }}
                >
                  Arc
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  style={{ fontSize: 54 }}
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </svg>
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
