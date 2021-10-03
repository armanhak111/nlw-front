import { createSlice } from "@reduxjs/toolkit";

const initialState: MainSlice = {
  newDietID: "",
  adminAccess: true,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setNewDietId: (state, action) => {
      return {
        ...state,
        newDietID: action.payload,
      };
    },
    setAdminAccessybility: (state, action) => {
      return {
        ...state,
        adminAccess: action.payload
      }
    }
  },
});

export const { setNewDietId, setAdminAccessybility } = mainSlice.actions;

export default mainSlice.reducer;
