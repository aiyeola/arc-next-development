// @ts-nocheck
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactGA from 'react-ga';

import Link from 'src/Link';
import ButtonArrow from './ButtonArrow';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    // @ts-ignore
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url('/assets/background.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/assets/mobileBackground.jpg')`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    // @ts-ignore
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    // @ts-ignore
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      className={classes.background}
      alignItems="center"
      justify={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesXS ? 'center' : matchesSM ? 'left' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Simple Software. <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st century
            </Typography>
            <Grid
              container
              item
              justify={
                matchesXS ? 'center' : matchesSM ? 'flex-start' : undefined
              }
            >
              <Button
                component={Link}
                href="/revolution"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  // @ts-ignore
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            setValue(false);
            ReactGA.event({
              category: 'Estimate',
              action: 'Call to Action Pressed',
            });
          }}
        >
          Free estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
