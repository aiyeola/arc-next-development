// @ts-nocheck
import React from 'react';
import Link from '../Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  footer: {
    // @ts-ignore
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/"
                onClick={() => setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                className={classes.link}
              >
                iOS/ Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/contact"
                onClick={() => setValue(4)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src="/assets/footerAdornment.svg"
        alt="black decorative slash"
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
