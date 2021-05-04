import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Saly2 from './../assets/Saly-2.png';

const useStyles = makeStyles({
  projectBackground: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: '10%',
    paddingLeft: '10%',
    marginTop: 100,
    position: 'relative'
  },
  splashImage: {
    width: '60%',
    position: 'absolute',
    right: '-25%',
    top: '-10%'
  },
});

export default function ProjectBackground() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <section className={classes.projectBackground}>
      <Typography component='h1' variant='h1' color='primary'>
        Project Background
      </Typography>
      <img src={Saly2} alt='Splash art' className={classes.splashImage} />
      <Typography component='h2' variant='h2' color='secondary'>
        The Problem
      </Typography>
      <Typography variant='body1' style={{ maxWidth: 700 }}>
        Getting my friends, significant other, or family to agree on a place to eat together is difficult and time-consuming.
        I need a tool that will suggest restaurants based on my group’s preferences, so that everyone has a say in where we eat.
      </Typography>
      <br />
      <br />
      <Typography>
        <span role='img'>🤔</span> <b>how might we make it easier for users to collaboratively choose restaurants?</b>
      </Typography>
      <Grid container spacing={8} style={{marginTop:20}}>
        <Grid item>
          <Typography component='h2' variant='h2' color='secondary'>
            PRODUCT GOALS
          </Typography>
          <ol>
            <li color='textPrimary'>
              <Typography>
                Help people collaboratively decide where to eat
              </Typography>
            </li>
            <li>
              <Typography>
                Help people find new restaurants in their area
              </Typography>
            </li>
            <li>
              <Typography>
                Help restaurants earn more visibility in their area
              </Typography>
            </li>
          </ol>
        </Grid>
        <Grid item>
          <Typography component='h2' variant='h2' color='secondary'>
            TARGET USER
          </Typography>
          <ul>
            <li>
              <Typography>
                <span role='img'>👨</span> Metropolitan Consumer
              </Typography>
            </li>
            <li>
              <Typography>
                <span role='img'>‍🍳</span> Restaurant Owner
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </section>
  );
}