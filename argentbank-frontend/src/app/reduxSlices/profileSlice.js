import { createSlice } from "@reduxjs/toolkit";
import { initProfileData } from "../initialStoreData";

export const profileSlice = createSlice({
  name: "profile",
  initialState: initProfileData,
  reducers: {
    setProfileData: (state, action) => {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.updatedAt = action.payload.updatedAt;
    },
    editProfileStatus: (state, action) => {
      return {
        ...state,
        isEdited: action.payload,
      };
    },
    updateProfileData: (state, action) => {
      return {
        ...state,
        firstName: action.payload[0],
        lastName: action.payload[1],
      };
    },
  },
});

export const { setProfileData, editProfileStatus, updateProfileData } =
  profileSlice.actions;
export default profileSlice.reducer;
