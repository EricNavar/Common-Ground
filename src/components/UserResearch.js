import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  return (
    <section>
      <Typography component='h1' variant='h1' color='primary'>
        User Research
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        EM SANCHEZ
      </Typography>
      <Typography>
        Goes out to eat with friends and significant other in hopes of finding the her new next favorite local restaurant
      </Typography>
      <Typography>
        Yelp #1 fan
      </Typography>
      <Typography>
        Nutrition and dietetics major who values good food on a budget
      </Typography>
      <Typography component='h3' variant='h3' color='secondary'>
        FRUSTRATIONS
      </Typography>
      <Typography>
        Having to google “Best ___ in Gainesville” to find a restaurant and relying on Google’s algorithm to show her the same options
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        COOPER FAMILY
      </Typography>
      <Typography>
        A family of four, with two parents and two children
      </Typography>
      <Typography>
        The parents value healthy eating habits for their children
      </Typography>
      <Typography>
        They enjoy going out to eat as a family every weekend Not very adventurous eaters, they like stability
      </Typography>
      <Typography component='h3' variant='h3' color='secondary'>
        FRUSTRATIONS
      </Typography>
      <Typography>
        Getting all four of them to be satisfied with the restaurant choice, since they all value different things
      </Typography>
      <Typography component='h2' variant='h2' color='secondary'>
        Will Thompson
      </Typography>
      <Typography>
        Extrovert, single
      </Typography>
      <Typography>
        Software Engineer
      </Typography>
      <Typography>
        College student
      </Typography>
      <Typography>
        Goes out to eat often with his parents or his friends. There’s often new friends joining the group.
      </Typography>
      <Typography component='h3' variant='h3' color='secondary'>
        FRUSTRATIONS
      </Typography>
      <Typography>
        Spending time each week deciding where to go
      </Typography>
      <Typography>
        He must ensure that the environment is not too loud for his friend, who is hard of hearing.
      </Typography>
    </section>
  );
}