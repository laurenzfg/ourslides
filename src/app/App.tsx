import React, { FunctionComponent, useEffect } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Container, CssBaseline, makeStyles, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import SignIn from '../features/auth/SignIn';
import Spinner from '../features/components/Spinner';
import LegalPage from '../features/components/LegalPage'
import InPresentation from '../features/in_presentation/InPresentation';
import Dashboard from '../features/dashboard/Dashboard';
import AccessCodeRedirector from '../features/auth/AccessCodeRedirector';
import { Router, RouteComponentProps, useNavigate, Link } from '@reach/router';
import { useAppSelector } from './hooks';
import { AuthStates } from '../features/auth/userSlice';
import { inherits } from 'util';
import PresentationEditor from '../features/presentation_editor/PresentationEditor';
import NotFoundPage from '../features/components/NotFoundPage';

// Created with material.io: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=283593&secondary.color=D32F2F&primary.text.color=ffffff
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5f5fc4',
      main: '#283593',
      dark: '#001064',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6659',
      main: '#d32f2f',
      dark: '#9a0007',
      contrastText: '#fff',
    },
  },
});

const useStyles = makeStyles((theme: any) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const HomeRedirectorRoute = (props: RouteComponentProps) => {
  const authState = useAppSelector((state) => state.user.state); // creates subscription
  const navigate = useNavigate();

  // Asyncly redirect the user upon auth status state
  useEffect(() => {
    // If user selected no route, redirect them based on auth status
    switch (authState) {
      case AuthStates.UNAUTH:
        navigate("/signin");
        break;
      case AuthStates.USER:
        navigate("/dashboard");
        break;
      case AuthStates.ACCESSCODE:
        // Check if backend can give us the correct presentation; give them error message and sign them out
        navigate("/presentation/42"); // STUB
        break;
      default:
        // This should mean that we are AuthStates.AWAITING
        break;
    }
  }, [authState, navigate]);

  return (<Spinner />);
}

// TODO We should merge these two components and have the conditions as a Higer Order Function
const UserOnlyRoute : FunctionComponent<RouteComponentProps> = (props) => {
  const authState = useAppSelector((state) => state.user.state); // creates subscription
  const navigate = useNavigate();

  useEffect(() => {
    if (authState !== AuthStates.USER && authState !== AuthStates.AWAITING) {
      navigate("/"); // send user to carousel
    }
  }, [authState, navigate]);

  if (authState !== AuthStates.USER) {
    return (<Spinner />);
  } else {
    return (<>{props.children}</>);
  }
};

const UserOrAcCodeOnlyRoute : FunctionComponent<RouteComponentProps> = (props) => {
  const authState = useAppSelector((state) => state.user.state); // creates subscription
  const navigate = useNavigate();

  useEffect(() => {
    if (authState !== AuthStates.USER && authState !== AuthStates.ACCESSCODE && authState !== AuthStates.AWAITING) {
      navigate("/"); // send user to carousel
    }
  }, [authState, navigate]);

  if (authState !== AuthStates.USER && authState !== AuthStates.ACCESSCODE) {
    return (<Spinner />);
  } else {
    return (<>{props.children}</>);
  }
};

const DashboardRoute = (props: RouteComponentProps) => <Dashboard/>
const SignInRoute = (props: RouteComponentProps) => <SignIn />;
const LegalRoute = (props: RouteComponentProps) => <LegalPage />;
const NotFound = (props: RouteComponentProps) => <NotFoundPage />;

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="absolute">
          <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography component="h1" variant="h6" color="inherit" noWrap>
                Ourslides
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="xs">
          <Router>
            <HomeRedirectorRoute path="/" />
            <SignInRoute path="/signin" />
            <AccessCodeRedirector path="/accode/:accessCode" />
            <UserOrAcCodeOnlyRoute path="/presentation">
              <InPresentation path=":presentationId"/>
              <NotFound default />
            </UserOrAcCodeOnlyRoute>
            <UserOnlyRoute path="/edit">
              <PresentationEditor path=":presentationId" />
              <NotFound default />
            </UserOnlyRoute>
            <UserOnlyRoute path="/dashboard"><DashboardRoute default /></UserOnlyRoute>
            <LegalRoute path="/legal" />
            <NotFound default />
          </Router>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
