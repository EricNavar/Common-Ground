import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Mockup from './../assets/mockup.png';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './../assets/logo.png';
import Corner from './../assets/corner.svg';

const useStyles = makeStyles({
  reflection: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    paddingRight: '10%',
    paddingLeft: '10%',
    display: 'flex',
    //alignItems: 'start',
  },
  mockup: {
    maxWidth: '100%',
    marginTop: 100
  },
  pinkBackground: {
    backgroundColor: '#FDEEE6',
    width: '100%',
    height: 250,
    borderTopRightRadius: 80,
    alignItems: 'center',
    display: 'flex',
  },
  logo: {
    width: 500,
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: '10%',
    marginTop: 110,
    marginBottom: 80
  },
  gridItem: {
    height: '100%',
    paddingBottom: '0px !important'
  }
});

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <section className={classes.grid}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        className={classes.grid}
        spacing={8}
      >
        <Grid item xs={12} md={6} className={classes.gridItem} style={{textAlign:'center'}}>
          <img src={Mockup} alt='mockup' width='600px' className={classes.mockup} />
        </Grid>
        <Grid item xs={12} md={6} style={{display:'flex',flexDirection:'column'}}>
          <Typography component='h1' variant='h1' color='primary'>
            what's next?
          </Typography>
          <Typography>
            The concept of Common Ground has been well received by our peers, professors, and research
            participants. However, we see potential improvement in the area of external app integration.
            We are determined to support locals businesses in the restaurant-picking process by suggesting
            them to our users, so we hope to collaborate with other businesses by integrating their services
            into our app.<br /><br />
            The restaurant industry has so much room for growth and can become the niche for
            restaurant connosieurs. From reviews, menus, and food-driven chats, Common Ground has the potential
            to become so much more than a place you go when you don’t know where to eat. It can be a place
            to make food a group experience.
          </Typography>
          <div style={{display:'flex',flexGrow:1}}/>
          <img src={Logo} alt="Common Ground Logo" width='500px' className={classes.logo} />
        </Grid>
      </Grid>
      <div style={{marginTop:-330}}>
        <div style={{lineHeight:0}}>
          <img src={Corner} alt="color background" style={{width:80,zIndex:-1,position:'relative'}}/>
        </div>
        <div className={classes.pinkBackground}/>
      </div>
    </section>
  );
}