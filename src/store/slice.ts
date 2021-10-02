import { createSlice } from "@reduxjs/toolkit";

const initialState: MainSlice = {
  newDietID: "",
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
  },
});

export const { setNewDietId } = mainSlice.actions;

export default mainSlice.reducer;
