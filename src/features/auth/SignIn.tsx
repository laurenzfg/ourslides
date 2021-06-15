import React, { useState } from 'react'
import { Typography, Box, TextField, Button, Avatar, CssBaseline } from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { makeStyles } from '@material-ui/core/styles';
import { updatedAwsConfig } from '../../index'
import { Link, RouteComponentProps, useNavigate } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
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
  const { 
    domain,  
    redirectSignIn, 
    responseType } = updatedAwsConfig.oauth;
  const clientId = updatedAwsConfig.aws_user_pools_web_client_id;
  
  const url_to_google = 'https://' + domain + '/oauth2/authorize?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId + '&identity_provider=Google';
  const url_to_facebook = 'https://' + domain + '/oauth2/authorize?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId + '&identity_provider=Facebook';  

  const classes = useStyles();
  const navigate = useNavigate();
  const [accode, setAccode] = useState(''); // '' is the initial state value

  const accessCodeHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    navigate("/accode/" + accode);
  };

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
      <form className={classes.form} onSubmit={accessCodeHandler} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="accode"
          label="Access Code"
          name="accode"
          onInput={(e: any) => { setAccode(e.target.value) }}
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
        <Typography variant="body2" gutterBottom>By signing in, you accept the <Link to="/legal">Privacy Policy and Terms of Service</Link></Typography>    
      </form>
    </Box>
  );
}
