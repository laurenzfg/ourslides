import { Auth, Hub } from "aws-amplify";
import { Store } from "redux";
import { signin, SignInPayload, signout } from "./userSlice";

function setupListeners(store: Store) {
  Hub.listen("auth", (data) => {
    const event = data.payload.event;
    console.log("caught auth event:", event);
    if (data.payload.event === "signOut") {
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
    const { attributes, signInUserSession } =
      await Auth.currentAuthenticatedUser();
    let signInPayload: SignInPayload = {
      ...attributes,
      id_token: signInUserSession.idToken.jwtToken,
    };
    dispatch(signin(signInPayload));
  } catch {
    dispatch(signout());
  }
}

function signOut(store: Store) {
  const dispatch = store.dispatch;

  dispatch(signout());
}

export default setupListeners;
