import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  circle: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: '50%',
    textAlign: 'center',
  },
  aspectRatioBox: {
    width: 400,
  },
  absoluteText: {
  }
});


export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
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
      <div className={classes.aspectRatioBox}>
        <div className={classes.circle} style={{height:0,paddingTop:'100%',position:'relative'}}>
          <div style={{top:'50%',right:'50%',position:'absolute',transform:'translate(50%, -50%)'}}>
            <Typography className={classes.absoluteText}>
              delivery
            </Typography>
            <div className={classes.circle} style={{height:0,paddingTop:'100%',position:'relative', width: 250}}>
              <div style={{top:'50%',right:'50%',position:'absolute',transform:'translate(50%, -50%)'}}>
                <Typography className={classes.absoluteText}>
                  users
                </Typography>
                <div className={classes.circle} style={{width:100,height:100}}>
                  <Typography className={classes.absoluteText}>
                    designers<br/>+ devs
                  </Typography>
                </div>
                <Typography className={classes.absoluteText}>
                  restaurants
                </Typography>
              </div>
            </div>
            <Typography className={classes.absoluteText}>
              critics
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}