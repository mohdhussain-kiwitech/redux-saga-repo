import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./utils";
import {
  updateNameSuccess,
  updateEmailSuccess,
  updateCommentSuccess,
} from "../actionTypes/ActionTypes"; 



const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateNameSuccess, (state, action) => {
    state.name = action.payload;
  });
  builder.addCase(updateEmailSuccess, (state, action) => {
    state.email = action.payload;
  });
  builder.addCase(updateCommentSuccess, (state, action) => {
    state.joke = action.payload;
  });
});

export default userReducer;
