import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  emaiol: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
