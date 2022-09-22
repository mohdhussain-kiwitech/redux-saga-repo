import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "Anas",
  email: "",
  joke: "Your joke is",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME_SUCCESS", (state, action) => {
    state.name = action.payload;
  });
  builder.addCase("UPDATE_EMAIL_SUCCESS", (state, action) => {
    state.email = action.payload;
  });
  builder.addCase("UPDATE_COMMENT_SUCCESS", (state, action) => {
    state.joke = action.payload;
  });
});

export default userReducer;
