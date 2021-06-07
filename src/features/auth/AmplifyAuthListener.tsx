import { Auth, Hub } from "aws-amplify";
import { Store } from "redux";
import { signin, signout } from "./userSlice"

function setupListeners(store: Store) {
  Hub.listen('auth', (data) => {
    const event = data.payload.event;
    console.log('caught auth event:', event);
    if (data.payload.event === 'signOut') {
      signOut(store);
    }
    sendUserAttrToRedux(store);
  });
  // Initially load as well
  sendUserAttrToRedux(store);
}

async function sendUserAttrToRedux(store: Store) {
    const dispatch = store.dispatch;

    try {
      const {attributes} = await Auth.currentAuthenticatedUser();
      dispatch(signin(attributes));
    } catch {
      dispatch(signout());
    }
    
}

function signOut(store: Store) {
    const dispatch = store.dispatch;

    dispatch(signout());
}
  
export default setupListeners;