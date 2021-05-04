import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marketAnalysis: {
    marginTop: 100,
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  circleOuter: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: '50%',
    textAlign: 'center',
    height: 0, paddingTop: '100%', position: 'relative'
  },
  innermostCircle: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#FFD731',
    borderRadius: '50%',
    textAlign: 'center',
    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center'
  },
  circleInner: {
    top: '50%',
    right: '50%',
    position: 'absolute',
    transform: 'translate(50%, -50%)'
  },
  bottomMargin: {
    marginBottom: 24
  },
  topMargin: {
    marginTop: 24
  },
  middleCircle: {
    borderColor: '#FF9933',
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
    [theme.breakpoints.up('sm')]: {
      width: 250,
    },
  },
  stakeholdersChart: {
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
  }
}));


export default function MarketAnalysis() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <section className={classes.marketAnalysis}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item xs={12} md={6}>
          <div id='stakeholders' className={classes.stakeholdersChart}>
            <div className={classes.circleOuter} color='primary'>
              <div className={classes.circleInner}>
                <Typography variant='body2' className={classes.bottomMargin} style={{color:'#FF6E6E'}}>
                  delivery
                </Typography>
                <div className={[classes.circleOuter, classes.middleCircle].join(' ')}>
                  <div className={classes.circleInner}>
                    <Typography variant='body2' className={classes.bottomMargin} style={{color:'#FF9933'}}>
                      users
                    </Typography>
                    <div className={classes.innermostCircle}>
                      <Typography variant='body2' color='textSecondary' style={{margin:'auto'}}>
                        designers<br />+ devs
                      </Typography>
                    </div>
                    <Typography variant='body2' className={classes.topMargin} style={{color:'#FF9933'}}>
                      restaurants
                    </Typography>
                  </div>
                </div>
                <Typography variant='body2' className={classes.topMargin} color='primary'>
                  critics
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
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
          <Typography component='h2' variant='h2' color='secondary'>
            IS THERE ENOUGH MARKET FOR OUR PRODUCT?
          </Typography>
          <Typography>
            The existing apps for restaurant browsing makes food an individual effort when in reality it is a group experience. There is opportunity to further enhance the food culture by creating a place where friends and family can together decide on a new place to make memories.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}