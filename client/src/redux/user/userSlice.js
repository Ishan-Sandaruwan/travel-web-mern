import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading:false,
  error:null,
  currentUser:null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinStart:(state) =>{
        state.loading=true,
        state.error=null
    },
    signinFailure:(state,action) => {
        state.loading = false,
        state.error = action.payload
    },
    signinSuccess: (state, action) => {
      state.loading = false,
      state.error = null,
      state.currentUser = action.payload
    },
    signOut: (state) => {
      state.loading = false,
      state.error = null,
      state.currentUser = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { signinStart, signinFailure, signinSuccess,signOut } = userSlice.actions

export default userSlice.reducer
