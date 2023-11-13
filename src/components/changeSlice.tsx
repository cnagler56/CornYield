import { createSlice } from "@reduxjs/toolkit";

const changeSlice = createSlice({
  name: "index",
  initialState: 2,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const selectIndex = (state) => state.index;

export default changeSlice.reducer;
