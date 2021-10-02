import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../store/slice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
