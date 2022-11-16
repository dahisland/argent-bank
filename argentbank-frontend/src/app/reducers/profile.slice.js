import { createSlice } from "@reduxjs/toolkit";
import { initStateProfile } from "../initStatesData";

export const profileSlice = createSlice({
  name: "profile",
  initialState: initStateProfile,
  reducers: {
    getProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
      state.profileStatus = action.payload.profileStatus;
      state.profileMessage = action.payload.profileMessage;
    },
    rejectedProfileData: (state, action) => {
      state.profileData = initStateProfile.profileData;
      state.profileStatus = action.payload.profileStatus;
      state.profileMessage = action.payload.profileMessage;
    },
    editProfileStatus: (state, action) => {
      state.profileIsEdited = action.payload;
    },
    updateProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
      state.profileStatus = action.payload.profileStatus;
      state.profileMessage = action.payload.profileMessage;
    },
    updateProfileMessage: (state, action) => {
      state.profileMessage = action.payload;
    },
    resetProfileData: (state, action) => {
      state.profileData = action.payload.profileData;
      state.profileStatus = action.payload.profileStatus;
      state.profileMessage = action.payload.profileMessage;
      if (state.profileIsEdited) {
        state.profileIsEdited = false;
      }
    },
  },
});

export const {
  getProfileData,
  rejectedProfileData,
  editProfileStatus,
  updateProfileData,
  updateProfileMessage,
  resetProfileData,
} = profileSlice.actions;
export default profileSlice.reducer;
