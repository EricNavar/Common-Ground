import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Emoji1 from './../assets/emoji1.png';
import Emoji2 from './../assets/emoji2.png';
import Emoji3 from './../assets/emoji3.png';

const useStyles = makeStyles({
  userResearch: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
  profileHeader: {
    textAlign: 'center'
  },
  interests: {
    marginBottom: 16,
    '& div': {
      borderWidth: 3,
      borderRadius: 8,
      borderStyle: 'solid',
      marginTop: 8,
      marginBottom: 8,
      padding: 6,
    },
    '& :nth-child(1)': {
      borderColor:'#FF6E6E',
    },
    '& :nth-child(2)': {
      borderColor:'#FF9933',
      width: '80%'
    },
    '& :nth-child(3)': {
      borderColor:'#FFD731',
      width: '60%'
    },
  },
  link: {
    textDecoration: 'underline'
  }
});

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <section className={classes.userResearch}>
      <Typography component='h1' variant='h1' color='primary' align='center'>
        User Research
      </Typography>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.profileHeader}>
            <img src={Emoji1} alt='Woman Emoji' width='120px' />
            <Typography component='h2' variant='h2' color='secondary'>
              EM SANCHEZ
            </Typography>
          </div>
          <div className={classes.interests}>
            <div>
              <Typography variant='body2'>
                Price
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Reviews
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Location
              </Typography>
            </div>
          </div>
          <ul>
            <li>
              <Typography>
                Goes out to eat with friends and significant other in hopes of finding the her new next favorite local restaurant
              </Typography>
            </li>
            <li>
              <Typography>
                Yelp #1 fan
              </Typography>
            </li>
            <li>
              <Typography>
                Nutrition and dietetics major who values good food on a budget
              </Typography>
            </li>
          </ul>
          <Typography component='h3' variant='h3' color='secondary'>
            FRUSTRATIONS
          </Typography>
          <ul>
            <li>
              <Typography>
                Having to Google “Best ___ in Gainesville” to find a restaurant and relying on Google’s algorithm to show her the same options
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.profileHeader}>
            <img src={Emoji2} alt='Family Emoji' width='120px' />
            <Typography component='h2' variant='h2' color='secondary'>
              COOPER FAMILY
            </Typography>
          </div>
          <div className={classes.interests}>
            <div>
              <Typography variant='body2'>
                Best bang for your buck
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Variety in menu
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Sanitation
              </Typography>
            </div>
          </div>
          <ul>
            <li>
              <Typography>
                A family of four, with two parents and two children
              </Typography>
            </li>
            <li>
              <Typography>
                The parents value healthy eating habits for their children
              </Typography>
            </li>
            <li>
              <Typography>
                They enjoy going out to eat as a family every weekend Not very adventurous eaters, they like stability
              </Typography>
            </li>
          </ul>
          <Typography component='h3' variant='h3' color='secondary'>
            FRUSTRATIONS
          </Typography>
          <ul>
            <li>
              <Typography>
                Getting all four of them to be satisfied with the restaurant choice, since they all value different things
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.profileHeader}>
            <img src={Emoji3} alt='Man Emoji' width='120px' />
            <Typography component='h2' variant='h2' color='secondary'>
              Will Thompson
            </Typography>
          </div>
          <div className={classes.interests}>
            <div>
              <Typography variant='body2'>
                Quiet place
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Good food
              </Typography>
            </div>
            <div>
              <Typography variant='body2'>
                Local place
              </Typography>
            </div>
          </div>
          <ul>
            <li>
              <Typography>
                Extrovert, single
              </Typography>
            </li>
            <li>
              <Typography>
                Software Engineer
              </Typography>
            </li>
            <li>
              <Typography>
                College student
              </Typography>
            </li>
            <li>
              <Typography>
                Goes out to eat often with his parents or his friends. There’s often new friends joining the group.
              </Typography>
            </li>
          </ul>
          <Typography component='h3' variant='h3' color='secondary'>
            FRUSTRATIONS
          </Typography>
          <ul>
            <li>
              <Typography>
                Spending time each week deciding where to go
              </Typography>
            </li>
            <li>
              <Typography>
                He must ensure that the environment is not too loud for his friend, who is hard of hearing.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Link href='https://www.figma.com/file/lchOctjE3qJadScBVgdWlz/?node-id=54%3A327' variant='h2' className={classes.link}>
        WIREFRAMES LINK
      </Link>
      <br/>
      <br/>
      <Link href='https://www.figma.com/file/lchOctjE3qJadScBVgdWlz/?node-id=54%3A1879' variant='h2' className={classes.link}>
        TASK FLOW LINK
      </Link>
    </section>
  );
}