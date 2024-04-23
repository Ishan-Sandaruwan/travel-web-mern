import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    signinFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    signinSuccess: (state, action) => {
      (state.loading = false),
        (state.error = null),
        (state.currentUser = action.payload);
    },
    signOut: (state) => {
      (state.loading = false), (state.error = null), (state.currentUser = null);
    },
    updateStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    updateFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    updateSuccess: (state, action) => {
      (state.loading = false),
        (state.error = null),
        (state.currentUser = action.payload);
    },
    removeError: (state) => {
      state.error = null;
    },
    deleteStart: (state) => {
      (state.loading = true), (state.error = null);
    },
    deleteFailure: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
    deleteSuccess: (state) => {
      (state.loading = false), (state.error = null), (state.currentUser = null);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  signinStart,
  signinFailure,
  signinSuccess,
  updateStart,
  updateFailure,
  updateSuccess,
  signOut,
  removeError,
  deleteStart,
  deleteFailure,
  deleteSuccess
} = userSlice.actions;

export default userSlice.reducer;
