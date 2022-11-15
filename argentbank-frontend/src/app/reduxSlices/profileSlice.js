import { createSlice } from "@reduxjs/toolkit";
import { initStateProfile } from "../initStatesData";

export const profileSlice = createSlice({
  name: "profile",
  initialState: initStateProfile,
  reducers: {
    getProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    rejectedProfileData: (state, action) => {
      state.profileData = initStateProfile.profileData;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    editProfileStatus: (state, action) => {
      state.isEdited = action.payload;
    },
    updateProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
    },
    resetProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
      state.status = action.payload.status;
      state.message = action.payload.message;
      if (state.isEdited) {
        state.isEdited = false;
      }
    },
  },
});

export const {
  getProfileData,
  rejectedProfileData,
  editProfileStatus,
  updateProfileData,
  resetProfileData,
} = profileSlice.actions;
export default profileSlice.reducer;
