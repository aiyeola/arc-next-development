import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Hero from './HeroBlock';
import Services from './ServicesBlock';
import Revolution from './RevolutionBlock';
import Information from './InformationBlock';
import CallToAction from '@ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Hero setValue={setValue} />
      <Services setValue={setValue} setSelectedIndex={setSelectedIndex} />
      <Revolution setValue={setValue} />
      <Information setValue={setValue} />
      <CallToAction setValue={setValue} />
    </Grid>
  );
}
