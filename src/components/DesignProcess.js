import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  return (
    <section>
      <Typography component='h1' variant='h1' color='primary'>
        design process
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        CREATION OF GROUPS
      </Typography>
      <ul>
        <li>
          <Typography>
            Creation of a profile
          </Typography>
        </li>
        <li>
          <Typography>
            Add friends to group
          </Typography>
        </li>
      </ul>
      <Typography component='h2' variant='h2' color='secondary'>
        INFORMATION CARDS FOR RESTAURANTS
      </Typography>
      <ul>
        <li>
          <Typography>
            Photos
          </Typography>
        </li>
        <li>
          <Typography>
            Reviews
          </Typography>
        </li>
        <li>
          <Typography>
            Portion size
          </Typography>
        </li>
        <li>
          <Typography>
            Menu
          </Typography>
        </li>
        <li>
          <Typography>
            Prices
          </Typography>
        </li>
        <li>
          <Typography>
            Nutritional value
          </Typography>
        </li>
        <li>          <Typography>
          Location
          </Typography>
        </li>
        <li>
          <Typography>
            Delivery options
          </Typography>
        </li>
      </ul>
      <Typography>
        Messaging
      </Typography>
      <Typography>
        Message your group to discuss or vote on polls
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        INTEGRATE WITH OTHER APPS FOR EASY ACCESS
      </Typography>
      <ul>
        <li>
          <Typography>
            Payment
          </Typography>
        </li>
        <li>
          <Typography>
            Reviews
          </Typography>
        </li>
        <li>
          <Typography>
            Online ordering
          </Typography>
        </li>
      </ul>
      <Typography component='h2' variant='h2' color='secondary'>
        DECISION MAKERS
      </Typography>
      <ul>
        <li>
          <Typography>
            Picks random option from AI-generated options (spinning a wheel)
          </Typography>
        </li>
        <li>
          <Typography>
            Recommended option
          </Typography>
        </li>
        <li>
          <Typography>
            Polls
          </Typography>
        </li>
      </ul>
      <Typography component='h2' variant='h2' color='secondary'>
        SEARCH ABILITIES
      </Typography>
      <ul>
        <li>
          <Typography>
            Price
          </Typography>
        </li>
        <li>
          <Typography>
            Location
          </Typography>
        </li>
        <li>
          <Typography>
            Cuisine
          </Typography>
        </li>
      </ul>
    </section>
  );
}