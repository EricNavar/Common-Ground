import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  return (
    <section>
      <Typography component='h1' variant='h1' color='primary'>
        Market Analysis
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        STAKEHOLDER MAP
      </Typography>
      <Typography>
        Our stakeholders range from those working on the app, to our users, to restaurants who would
        like to boost their online presence, as well as delivery services and food critics.
      </Typography>
      <Typography>
        how might we make it easier for users to collaboratively choose restaurants?
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        IS THERE ENOUGH MARKET FOR OUR PRODUCT?
      </Typography>
      <Typography>
        The existing apps for restaurant browsing makes food an individual effort when in reality it is a group experience. There is opportunity to further enhance the food culture by creating a place where friends and family can together decide on a new place to make memories.
      </Typography>
    </section>
  );
}