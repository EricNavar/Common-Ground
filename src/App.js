import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProjectBackground from './components/ProjectBackground';
import MarketAnalysis from './components/MarketAnalysis';
import UserResearch from './components/UserResearch';
import DesignProcess from './components/DesignProcess';
import Reflection from './components/Reflection';

const useStyles = makeStyles({
  root: {
    maxWidth: 1080,
    margin: '120px auto'
  },
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
      fontSize: 34,
      fontWeight: 'bolder',
      marginBottom: 80,
      marginTop: 100
    },
    h2: {
      textTransform: "uppercase",
      fontSize: 22,
      marginBottom: 40,
      marginTop: 20
    },
    h3: {
      textTransform: "uppercase",
      fontSize: 18,
    },
    body1: {
      color: '#707070'
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
