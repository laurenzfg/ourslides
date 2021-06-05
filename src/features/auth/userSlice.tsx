import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  awaitingAuthInfo: boolean,
  name: string,
  given_name: string,
  email: string,
  sub: string,
}

const initialState : CounterState = {
  awaitingAuthInfo: true,
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
      state.name = "";
      state.given_name = "";
      state.email = "";
      state.sub = "";
    },
    signin: (state, action) => {
      state.name = action.payload.name;
      state.given_name = action.payload.given_name;
      state.email = action.payload.email;
      state.sub = action.payload.sub;
    },
  },
})

// Action creators are generated for each case reducer function
export const { signin, signout } = userSlice.actions

export default userSlice.reducer