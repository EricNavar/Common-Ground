import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProjectBackground from './components/ProjectBackground';
import MarketAnalysis from './components/MarketAnalysis';
import UserResearch from './components/UserResearch';
import DesignProcess from './components/DesignProcess';
import Reflection from './components/Reflection';

const useStyles = makeStyles({
  root: {
    marginTop: 120,
    overflow: 'hidden',
    '& li::marker': {
      color: '#707070',
      display: 'inline-block',
      width: '1em',
      marginLeft: '-1em',
      fontSize: '1.25rem'
    },
  }
});

const myTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FF6E6E',
    },
    secondary: {
      main: '#FF9933',
    },
    textPrimary: {
      main: '#707070'
    },
  },
  typography: {
    fontFamily: "'Nunito Sans', 'Helvetica', 'Arial', sans-serif",
    h1: {
      textTransform: "lowercase",
      fontSize: 45,
      fontWeight: 900,
      marginBottom: 40,
    },
    h2: {
      textTransform: "uppercase",
      fontSize: 22,
      marginBottom: 40,
      marginTop: 20,
      fontWeight: 'bold'
    },
    h3: {
      textTransform: "uppercase",
      fontSize: 18,
    },
    body1: {
      color: '#707070',
      fontSize: '1.25rem'
    },
    body2: {
      color: '#707070',
    }
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <ProjectBackground />
        <MarketAnalysis />
        <UserResearch />
        <DesignProcess />
        <Reflection />
      </div>
    </ThemeProvider>
  );
}

export default App;
