import { configureStore } from "@reduxjs/toolkit";
import { reducer as searchUsersReducer } from "./searchUsers";
import { reducer as userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    searchUsers: searchUsersReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
