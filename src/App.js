import logo from './logo.svg';
import './App.css';
import { Container, Typography ,Grid, Box} from '@mui/material'
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useState} from 'react'
import Login from './components/login'
import { createTheme } from '@material-ui/core/styles'

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const App = () => {
   const [light, setLight] = useState(true);
  return (
     <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
       {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
       
        <Container sx={{display: 'flex', alignItems: 'center', height: '100vh', width: '100%',flexDirection: 'center'}}>
         <Login/>
       </Container>

    </MuiThemeProvider>
  );
}

export default App;
