import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/auth/userSlice'
import presentationsReducer from '../features/dashboard/presentationsSlice'

const store = configureStore({
  reducer: {
      user: userReducer,
      presentations: presentationsReducer
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch