import { createSelector } from "reselect";

const mainSelector = (state: Store) => state.main;

export const newDietIDSelector = createSelector(
  mainSelector,
  (state) => state.newDietID
);

export const adminAccessSelector = createSelector(mainSelector, state => state.adminAccess)

export const modalOpenSelector = createSelector(mainSelector, state => state.isModalOpen)
