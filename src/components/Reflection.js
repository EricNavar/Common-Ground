import React from 'react';
import Typography from '@material-ui/core/Typography';
import Mockup from './../assets/mockup.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'end',
  },
});

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <section>
      <Typography component='h1' variant='h1' color='primary'>
        what's next?
      </Typography>
      <div className={classes.container}>
        <img src={Mockup} alt='mockup' width='300px' />
        <Typography>
          The concept of Common Ground has been well received by our peers, professors, and research
          participants. However, we see potential improvement in the area of external app integration.
          We are determined to support locals businesses in the restaurant-picking process by suggesting
          them to our users, so we hope to collaborate with other businesses by integrating their services
          into our app.<br/><br/>
          The restaurant industry has so much room for growth and can become the niche for
          restaurant connosieurs. From reviews, menus, and food-driven chats, Common Ground has the potential
          to become so much more than a place you go when you don’t know where to eat. It can be a place
          to make food a group experience.
        </Typography>
      </div>
    </section>
  );
}