import { Typography, Box, TextField, Button, Avatar } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { makeStyles } from '@material-ui/core/styles';
import { updatedAwsConfig } from '../../index'

const useStyles = makeStyles((theme) => ({
  wrapper: {
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

  return (
    <Box className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <AccountCircleOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <FacebookLoginButton onClick={() => { window.location.assign(url_to_facebook) }}></FacebookLoginButton>
      <GoogleLoginButton onClick={() => { window.location.assign(url_to_google) }}></GoogleLoginButton>
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
    </Box>
  );
}
