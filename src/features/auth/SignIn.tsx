import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FooterTextComponent from '../layout/components/FooterTextComponent';
import { Auth } from 'aws-amplify';
import { updatedAwsConfig } from '../../index'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useAppSelector } from '../../app/hooks';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1,0,1,0)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  const { 
    domain,  
    redirectSignIn, 
    responseType } = updatedAwsConfig.oauth;
  const clientId = updatedAwsConfig.aws_user_pools_web_client_id;
  
  const url_to_google = 'https://' + domain + '/oauth2/authorize?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId + '&identity_provider=Google';
  const url_to_facebook = 'https://' + domain + '/oauth2/authorize?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId + '&identity_provider=Facebook';

  const givenName = useAppSelector((state) => state.user.given_name);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleOutlinedIcon />
        </Avatar>
        <p>Hello {givenName} </p>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FacebookLoginButton onClick={() => { window.location.assign(url_to_facebook) }}></FacebookLoginButton>
        <GoogleLoginButton onClick={() => { window.location.assign(url_to_google) }}></GoogleLoginButton>
        <button onClick={() => Auth.signOut()}>Sign Out</button>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Got an access code?
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="accode"
            label="Access Code"
            name="accode"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Join Presentation
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <FooterTextComponent />
      </Box>
    </Container>
  );
}
