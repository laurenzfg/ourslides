
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Container, CssBaseline, makeStyles, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import SignIn from './Components/SignIn';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';

// Created with material.io: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=283593&secondary.color=1E88E5&primary.text.color=ffffff
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6ab7ff',
      main: '#1e88e5',
      dark: '#005cb2',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Ourslides
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg">
            <SignIn />
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
