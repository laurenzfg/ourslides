import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';

// Make AWS config available globally
// Set the redirect URI for OAuth Flows according to localhost or prod deployment
const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// Get the redirect URIs for dev and prod from config
const [
  productionRedirectSignIn,
  localRedirectSignIn,
] = awsconfig.oauth.redirectSignIn.split(",");

const [
  productionRedirectSignOut,
  localRedirectSignOut,
] = awsconfig.oauth.redirectSignOut.split(",");

// set the right redirect URI
export const updatedAwsConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Let's boot up our AWS Amplify lib
Amplify.configure(updatedAwsConfig);

async function getUserAttributes() {
  let userAttributes;
  try {
    const {attributes} = await Auth.currentAuthenticatedUser();
    userAttributes = attributes;
  } catch {
    userAttributes = {};
  }
  console.log(userAttributes);
}

// Initially load attributes
getUserAttributes();

// Update logged in state whenever something happens on the auth channel
Hub.listen('auth', (data) => {
  const event = data.payload.event;
  console.log('caught auth event:', event);
  getUserAttributes();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();