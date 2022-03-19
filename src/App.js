import './App.css';
import Container from "./components/Container"
//UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container />
    </ThemeProvider>
  );
}

export default App;
