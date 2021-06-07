import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Different Auth States
enum AuthStates {
  AWAITING, // special status at the beginning of the lifecycle when we have no info from AWS Cognito
  UNAUTH,
  USER,
  ACCESSCODE
}

// Define a type for the slice state
interface AuthState {
  state: AuthStates,
  name: string, // iff USER contains the name of user, iff ACCESSCODE the access code
  given_name: string,
  email: string,
  sub: string,
}

interface SignInPayload {
  name: string,
  given_name: string,
  email: string,
  sub: string,
}

const initialState : AuthState = {
  state: AuthStates.AWAITING,
  name: "",
  given_name: "",
  email: "",
  sub: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signout: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.state = AuthStates.UNAUTH;
      state.name = "";
      state.given_name = "";
      state.email = "";
      state.sub = "";
    },
    signin: (state, action: PayloadAction<SignInPayload>) => {
      state.state = AuthStates.USER;
      state.name = action.payload.name;
      state.given_name = action.payload.given_name;
      state.email = action.payload.email;
      state.sub = action.payload.sub;
    },
    signInAccesscode: (state, action: PayloadAction<string>) => {
      state.state = AuthStates.ACCESSCODE;
      state.name = action.payload;
      state.given_name = "";
      state.email = "";
      state.sub = "";
    }
  },
})

// Action creators are generated for each case reducer function
const { signin, signout, signInAccesscode } = userSlice.actions;
export { AuthStates, signin, signout, signInAccesscode }

export default userSlice.reducer;