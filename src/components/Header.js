import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './../assets/logo.png';

const useStyles = makeStyles({
  designProcess: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
  headerText: {
    maxWidth: 1080,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pinkBackground: {
    backgroundColor: '#FDEEE6',
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 80,
    alignItems: 'center',
    display: 'flex',
  },
  pinkBackgroundBottomRightContainer: {
    position: 'relative',
    backgroundColor: '#FDEEE6',
    height: 80
  },
  pinkBackgroundBottomRight: {
    width: '100%',
    background: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    height: 80,
    borderTopRightRadius: 80
  },
  logo: {
    width: 800,
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default function Error404Page() {
  React.useEffect(() => {
    document.title = 'Page not found | DC Rock Fitness';
  }, []);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.pinkBackground}>
        <img src={Logo} alt="Common Ground Logo" width='800px' className={classes.logo}/>
      </div>
      <div className={classes.pinkBackgroundBottomRightContainer}>
        <div className={classes.pinkBackgroundBottomRight}></div>
      </div>
      <div className={classes.headerText}>
        <Typography variant='body1'>
          DIG3124 PRINCIPLES OF UX/UI DESIGN <b>FINAL REPORT</b>
        </Typography>
        <Typography variant='body2'>
          by Winona Nasser, Valeria Coll, Eric Navar, and Valentina Sanchez
        </Typography>
      </div>
    </div>
  );
}