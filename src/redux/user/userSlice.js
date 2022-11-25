import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser : null,
    currentUserDoc : null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    _setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setCurrentUserDoc: (state , action) => {
        state.currentUserDoc = action.payload;
    }

  },
})

// Action creators are generated for each case reducer function
export const { _setCurrentUser , setCurrentUserDoc} = userSlice.actions

export default userSlice.reducer