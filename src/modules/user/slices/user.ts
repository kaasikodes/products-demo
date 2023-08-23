import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../types";

type InitialState = {
  details: TUser;
  token: string;
};
const initialState: InitialState = {
  details: {
    name: "James",
    email: "james@example.com",
    photo: "",
  },
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<{ name: string }>) => {
      state.details.name = action.payload.name;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
