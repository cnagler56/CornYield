import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postsSlice";
import usersReducer from "../features/users/usersSlice";
import changeReducer from "../components/changeSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    index: changeReducer,
  },
});
