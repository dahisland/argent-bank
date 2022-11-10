import { createSlice } from "@reduxjs/toolkit";
import { initStateProfile } from "../initialStoreData";

export const profileSlice = createSlice({
  name: "profile",
  initialState: initStateProfile,
  reducers: {
    getProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    errorRequestProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    editProfileStatus: (state, action) => {
      state.isEdited = action.payload;
    },
    updateProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    resetProfileData: (state, action) => {
      state.profileData = action.payload;
      if (state.isEdited) {
        state.isEdited = false;
      }
    },
  },
});

export const {
  getProfileData,
  errorRequestProfileData,
  editProfileStatus,
  updateProfileData,
  resetProfileData,
} = profileSlice.actions;
export default profileSlice.reducer;
