import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  return (
    <section>
      <Typography component='h1' variant='h1' color='primary'>
        Project Background
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        The Problem
      </Typography>
      <Typography variant='body1'>
        Getting my friends, significant other, or family to agree on a place to eat together is difficult and time-consuming.
        I need a tool that will suggest restaurants based on my group’s preferences, so that everyone has a say in where we eat.
      </Typography>
      <Typography>
        how might we make it easier for users to collaboratively choose restaurants?
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        PRODUCT GOALS
      </Typography>
      <ul>
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
      </ul>
      <Typography component='h2' variant='h2' color='secondary'>
        TARGET USER
      </Typography>
      <ul>
        <li>
          <Typography>
            Metropolitan Consumer
          </Typography>
        </li>
        <li>
          <Typography>
            Restaurant Owner
          </Typography>
        </li>
      </ul>
    </section>
  );
}