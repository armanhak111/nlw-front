import { createSelector } from "reselect";

const mainSelector = (state: Store) => state.main;

export const newDietIDSelector = createSelector(
  mainSelector,
  (state) => state.newDietID
);
