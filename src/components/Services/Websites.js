// @ts-nocheck
import React from 'react';
import Link from '../../Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from '@ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    padding: '0 5em',
    [theme.breakpoints.down('sm')]: {
      padding: '0 1.5em',
    },
  },
  paragraphContainer: {
    maxWidth: '25em',
  },
}));

function Websites({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton
              component={Link}
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
              style={{ backgroundColor: 'transparent' }}
            >
              <img
                src="/assets/backArrow.svg"
                alt="back to iOS / Android development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h1" align={matchesMD ? 'center' : undefined}>
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href="/services"
              onClick={() => setSelectedIndex(0)}
              style={{ backgroundColor: 'transparent' }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="forward to Services page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? 'center' : undefined}
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                alt="graph with magnifying glass with 1's and 0's"
                style={{ marginLeft: '-3em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? 'center' : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="Word outline made of dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            It’s no secret that people like to shop online.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? 'center' : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesSM ? 'center' : undefined}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="website standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            If you’re like us, probably never.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? 'center' : undefined}
          >
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}

export default Websites;
